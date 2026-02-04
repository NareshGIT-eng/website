from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class EnquiryCreate(BaseModel):
    name: str
    phone: str
    email: Optional[EmailStr] = None
    productType: str
    quantity: str
    location: str
    message: Optional[str] = None
    language: str
    submittedAt: str

class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    productType: str
    quantity: str
    location: str
    message: Optional[str] = None
    language: str
    submittedAt: str
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


def send_email_notification(enquiry_data: dict):
    """Send email notification for new enquiry"""
    try:
        # Email configuration
        sender_email = os.environ.get('SMTP_EMAIL', 'noreply@subacoconut.com')
        sender_password = os.environ.get('SMTP_PASSWORD', '')
        recipient_email = 'jsubacoconutmerchant@gmail.com'
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"🥥 New Enquiry from {enquiry_data['name']}"
        msg['From'] = sender_email
        msg['To'] = recipient_email
        
        # Create HTML email content
        html_content = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
              <h2 style="color: #78350f; border-bottom: 3px solid #15803d; padding-bottom: 10px;">
                🥥 New Customer Enquiry
              </h2>
              
              <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #15803d; margin-top: 0;">Customer Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px; font-weight: bold; width: 40%;">Name:</td>
                    <td style="padding: 10px;">{enquiry_data['name']}</td>
                  </tr>
                  <tr style="background-color: #f5f5f5;">
                    <td style="padding: 10px; font-weight: bold;">Phone:</td>
                    <td style="padding: 10px;"><a href="tel:{enquiry_data['phone']}" style="color: #15803d;">{enquiry_data['phone']}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Email:</td>
                    <td style="padding: 10px;">{enquiry_data.get('email', 'Not provided')}</td>
                  </tr>
                  <tr style="background-color: #f5f5f5;">
                    <td style="padding: 10px; font-weight: bold;">Product Type:</td>
                    <td style="padding: 10px;"><strong style="color: #78350f;">{enquiry_data['productType']}</strong></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Quantity:</td>
                    <td style="padding: 10px;"><strong>{enquiry_data['quantity']}</strong></td>
                  </tr>
                  <tr style="background-color: #f5f5f5;">
                    <td style="padding: 10px; font-weight: bold;">Delivery Location:</td>
                    <td style="padding: 10px;">{enquiry_data['location']}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Language:</td>
                    <td style="padding: 10px;">{enquiry_data['language']}</td>
                  </tr>
                  <tr style="background-color: #f5f5f5;">
                    <td style="padding: 10px; font-weight: bold;">Submitted:</td>
                    <td style="padding: 10px;">{enquiry_data['submittedAt']}</td>
                  </tr>
                </table>
              </div>
              
              {f'''<div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <h4 style="margin-top: 0; color: #78350f;">Additional Message:</h4>
                <p style="margin: 0;">{enquiry_data['message']}</p>
              </div>''' if enquiry_data.get('message') else ''}
              
              <div style="margin-top: 20px; padding: 15px; background-color: #dcfce7; border-radius: 8px;">
                <p style="margin: 0; color: #166534; font-weight: bold;">
                  📞 Action Required: Please contact the customer as soon as possible!
                </p>
              </div>
              
              <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
                <p>This is an automated notification from Suba Coconut Merchant website.</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Attach HTML content
        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)
        
        # Send email (only if SMTP is configured)
        if sender_password:
            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
                server.login(sender_email, sender_password)
                server.send_message(msg)
                logging.info(f"Email sent successfully for enquiry from {enquiry_data['name']}")
        else:
            logging.warning("SMTP not configured. Email not sent.")
            
    except Exception as e:
        logging.error(f"Failed to send email: {str(e)}")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/enquiry")
async def create_enquiry(enquiry_input: EnquiryCreate):
    """Create new customer enquiry and send email notification"""
    try:
        enquiry_dict = enquiry_input.model_dump()
        enquiry_obj = Enquiry(**enquiry_dict)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = enquiry_obj.model_dump()
        doc['createdAt'] = doc['createdAt'].isoformat()
        
        # Save to database
        await db.enquiries.insert_one(doc)
        
        # Send email notification
        send_email_notification(enquiry_dict)
        
        logging.info(f"New enquiry created from {enquiry_dict['name']}")
        
        return {
            "success": True,
            "message": "Enquiry submitted successfully",
            "enquiry_id": enquiry_obj.id
        }
    except Exception as e:
        logging.error(f"Error creating enquiry: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit enquiry")

@api_router.get("/enquiries", response_model=List[Enquiry])
async def get_enquiries():
    """Get all enquiries (for admin)"""
    # Exclude MongoDB's _id field from the query results
    enquiries = await db.enquiries.find({}, {"_id": 0}).sort("createdAt", -1).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for enquiry in enquiries:
        if isinstance(enquiry['createdAt'], str):
            enquiry['createdAt'] = datetime.fromisoformat(enquiry['createdAt'])
    
    return enquiries

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()