# Product Requirements Document (PRD)
## Suba Coconut Merchant Website

### Project Overview
**Project Name**: Suba Coconut Merchant Business Website  
**Date Created**: February 4, 2026  
**Last Updated**: February 4, 2026  
**Status**: MVP Complete (Frontend Only - Mock Data)

---

### Original Problem Statement
Build a professional bilingual (English & Tamil) website for Suba Coconut Merchant, a wholesale and retail coconut supplier based in Keelkattalai, Chennai. The website should showcase their products, services, quality process, and enable customers to easily contact them via phone or WhatsApp.

---

### User Personas

**Persona 1: Wholesale Buyer (Restaurant/Hotel Owner)**
- Needs: Bulk coconut supply, reliable quality, timely delivery
- Pain Points: Finding consistent quality suppliers, price transparency
- Goals: Easy ordering process, direct communication channel

**Persona 2: Retail Customer (Individual Buyer)**
- Needs: Fresh coconuts for personal use, small quantities
- Pain Points: Lack of information about coconut quality and freshness
- Goals: View products, understand quality process, quick contact

**Persona 3: Industrial Buyer (Copra/Oil Mills)**
- Needs: Large volume orders, specific coconut types
- Pain Points: Finding suppliers for bulk industrial-grade coconuts
- Goals: Service area coverage, custom order capabilities

---

### Core Requirements (Static)

#### **Functional Requirements**
1. **Bilingual Support**
   - English (default)
   - Tamil (toggle button)
   - Persistent language preference

2. **Navigation & Sections**
   - Home
   - About Us
   - Products (4 types)
   - Quality Process
   - Services
   - Gallery
   - Customer Reviews
   - FAQ
   - Contact Form

3. **Products to Showcase**
   - Brown Husked Coconut
   - Raw Husked Coconut
   - Semi Husked Coconut
   - Tender Coconut

4. **Contact Methods**
   - Floating WhatsApp button
   - Floating Call button
   - Contact form (name, phone, email, quantity, location, message)
   - Phone: +91 9952044195, +91 9790874116
   - Email: jsubacoconutmerchant@gmail.com

5. **Certifications Display**
   - FSSAI: 22425075000557
   - GST: 33NXGPS8769Q1ZX
   - UDYAM: UDYAM-TN-02-0425990

#### **Non-Functional Requirements**
1. **Design**
   - Natural/Earthy color scheme (browns, greens, amber)
   - Professional business look
   - Mobile responsive
   - Smooth animations and transitions

2. **Performance**
   - Fast page load
   - Optimized images
   - Smooth scrolling

---

### What's Been Implemented (February 4, 2026)

#### **Phase 1: Frontend MVP with Mock Data** ✅

**Architecture & Tech Stack:**
- React 19 with hooks
- Tailwind CSS for styling
- Shadcn UI components (accordion, buttons, inputs)
- Lucide React icons
- Context API for language management
- React Router DOM for navigation
- Responsive design (mobile, tablet, desktop)

**Components Created:**
1. `/frontend/src/context/LanguageContext.js` - Bilingual support system
2. `/frontend/src/utils/translations.js` - All translations (EN/TA)
3. `/frontend/src/utils/mockData.js` - Mock product, review, gallery data
4. `/frontend/src/components/Header.js` - Sticky header with navigation
5. `/frontend/src/components/HeroSection.js` - Landing section with CTA buttons
6. `/frontend/src/components/AboutSection.js` - Company information
7. `/frontend/src/components/ProductsSection.js` - 4 coconut products
8. `/frontend/src/components/QualitySection.js` - Quality process (4 steps)
9. `/frontend/src/components/ServicesSection.js` - 3 service types + service areas
10. `/frontend/src/components/GallerySection.js` - Product image gallery
11. `/frontend/src/components/ReviewsSection.js` - Customer testimonials
12. `/frontend/src/components/FAQSection.js` - Accordion-based FAQs
13. `/frontend/src/components/ContactSection.js` - Contact form + info
14. `/frontend/src/components/Footer.js` - Footer with links and certifications
15. `/frontend/src/components/FloatingButtons.js` - WhatsApp & Call buttons

**Features Implemented:**
- ✅ Bilingual website (English ↔ Tamil toggle)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Hero section with CTAs
- ✅ About section with mission, values, certifications
- ✅ 4 product cards with images and features
- ✅ Quality process with 4-step visualization
- ✅ Services section (Wholesale, Retail, Custom)
- ✅ Service areas (Chennai, Tamil Nadu, South India, Pan India)
- ✅ Gallery with 9 coconut images
- ✅ 4 customer review cards
- ✅ 6 FAQs with accordion
- ✅ Contact form (currently mock submission)
- ✅ Floating WhatsApp & Call buttons
- ✅ Footer with certifications and social media links
- ✅ Natural color scheme (earthy browns, greens, amber)
- ✅ Professional animations and hover effects
- ✅ Logo integration

**Assets:**
- Logo: `/app/frontend/public/images/logo.png`
- Product Images: 13 coconut images uploaded to `/app/frontend/public/images/`

---

### Prioritized Backlog

#### **P0 Features (Next Phase - Backend Development)**
1. **Backend API Development**
   - FastAPI backend setup
   - MongoDB database integration
   - Contact form submission API
   - Email notification system for enquiries
   - Form validation

2. **Database Models**
   - Enquiries collection (name, phone, email, quantity, location, message, timestamp)
   - Admin dashboard for viewing enquiries

3. **Frontend-Backend Integration**
   - Replace mock form submission with real API call
   - Toast notifications for form success/error
   - Form validation and error handling

#### **P1 Features (Future Enhancements)**
1. **Admin Panel**
   - View all enquiries
   - Manage products
   - Update gallery images
   - Manage customer reviews

2. **Enhanced Features**
   - Google Maps integration for location
   - WhatsApp direct message pre-fill
   - Image lightbox for gallery
   - Product search/filter
   - Price calculator

3. **SEO & Analytics**
   - Meta tags optimization
   - Google Analytics integration
   - Structured data markup
   - Sitemap generation

#### **P2 Features (Nice to Have)**
1. **Blog Section**
   - Articles about coconut benefits
   - Industry insights
   - Company updates

2. **Order Management System**
   - Online ordering capability
   - Order tracking
   - Payment integration

3. **Customer Portal**
   - Login/Registration
   - Order history
   - Repeat orders

---

### Next Tasks
1. **Immediate**: Confirm design and functionality with user
2. **Phase 2**: Backend API development (contact form, database)
3. **Phase 3**: Admin dashboard for managing enquiries
4. **Phase 4**: SEO optimization and deployment
5. **Phase 5**: Enhanced features based on user feedback

---

### Technical Notes
- All components use React functional components with hooks
- Language persistence via localStorage
- Images are optimized and stored in public folder
- Form currently uses mock submission (shows toast)
- Mobile-first responsive design approach
- No backend integration yet - pure frontend with mock data

---

### Success Metrics
- Professional, conversion-optimized design ✅
- Bilingual support (EN/TA) ✅
- Mobile responsive ✅
- Fast loading time ✅
- Clear CTAs (WhatsApp, Call, Contact Form) ✅
- Gallery showcasing products ✅
- Trust indicators (certifications, reviews) ✅

---

**Notes**: This is a frontend-only MVP with mock data. Backend development required in Phase 2 for form submissions and data management.
