# Email Setup Guide for Contact Form

## How to Set Up EmailJS for Your Contact Form

Your contact form is now ready to send emails directly to your inbox! Follow these steps to complete the setup:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Message from Portfolio Contact Form

**Content:**
```
You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your "Public Key" in the API Keys section
3. **Copy the Public Key**

### Step 5: Update Your Code
Open `assets/js/main.js` and replace these placeholders:

1. Replace `YOUR_PUBLIC_KEY` with your actual public key
2. Replace `YOUR_SERVICE_ID` with your service ID
3. Replace `YOUR_TEMPLATE_ID` with your template ID

### Step 6: Test Your Form
1. Open your portfolio website
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the message

## What Happens When Someone Submits the Form:

1. **User fills out the form** with their name, email, and message
2. **Form validates** that all fields are filled
3. **EmailJS sends the message** directly to your email: `phanisubrahmanyamnagidi@gmail.com`
4. **User sees confirmation** that their message was sent
5. **You receive the email** with all the details

## Features Included:

- ✅ Form validation (all fields required)
- ✅ Loading state while sending
- ✅ Success/error messages
- ✅ Form resets after successful submission
- ✅ Professional email template
- ✅ Direct delivery to your inbox

## Free Tier Limits:
- 200 emails per month (free)
- Perfect for portfolio contact forms

Your contact form is now fully functional and will send all messages directly to your email!

