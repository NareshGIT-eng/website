# Quick MongoDB Access Guide for Suba Coconut Merchant

## 1. View All Enquiries (via API - Easiest Method)

```bash
# Get all enquiries as JSON
curl http://localhost:8001/api/enquiries | jq

# Count total enquiries
curl -s http://localhost:8001/api/enquiries | jq 'length'

# Get latest 5 enquiries
curl -s http://localhost:8001/api/enquiries | jq '.[0:5]'
```

## 2. Access MongoDB Directly

### Check MongoDB Status
```bash
sudo supervisorctl status mongodb
```

### MongoDB Shell Commands
```bash
# Connect to MongoDB
mongosh mongodb://localhost:27017/coconut_db

# Inside MongoDB shell:
# View all enquiries
db.enquiries.find().pretty()

# Count enquiries
db.enquiries.countDocuments()

# Get latest 10 enquiries
db.enquiries.find().sort({createdAt: -1}).limit(10).pretty()

# Search by customer name
db.enquiries.find({name: "Customer Name"}).pretty()

# Search by phone number
db.enquiries.find({phone: "+91 9952044195"}).pretty()

# Exit MongoDB shell
exit
```

## 3. Your Database Connection Details

```
MongoDB URL: mongodb://localhost:27017
Database: coconut_db
Collection: enquiries
```

## 4. Sample Query to Export Enquiries

```bash
# Export all enquiries to JSON file
curl -s http://localhost:8001/api/enquiries | jq '.' > /tmp/enquiries_backup.json

# View the exported file
cat /tmp/enquiries_backup.json | jq
```

## 5. MongoDB Environment Variables

Your MongoDB configuration is in:
- Backend env: `/app/backend/.env`
- MONGO_URL variable
- DB_NAME variable

## Quick Test

Want to test if enquiries are being saved? Try this:

1. Submit a test enquiry via your website
2. Check immediately:
```bash
curl -s http://localhost:8001/api/enquiries | jq '.[-1]'
```

This will show you the most recent enquiry!
