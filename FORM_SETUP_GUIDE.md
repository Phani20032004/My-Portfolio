# Simple Email Setup Guide

## Quick Setup with Formspree (5 minutes)

Your contact form is now ready to send emails directly to your inbox! Here's the super simple setup:

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" and sign up with your email: `phanisubrahmanyamnagidi@gmail.com`
3. Verify your email address

### Step 2: Create a New Form
1. In your Formspree dashboard, click "New Form"
2. Give it a name like "Portfolio Contact Form"
3. **Copy the Form ID** (it looks like: `xrgkqyvw`)

### Step 3: Update Your Code
Open `index.html` and find this line:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
```

Replace `YOUR_FORM_ID` with your actual Form ID:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xrgkqyvw" method="POST" novalidate>
```

### Step 4: Test It!
1. Open your portfolio website
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email inbox - you'll receive the message!

## What Happens Now:

✅ **User fills out form** → Form validates all fields  
✅ **User clicks "Send Message"** → Shows "Sending message..."  
✅ **Formspree sends email** → Directly to your Gmail inbox  
✅ **User sees success message** → "Thank you! Your message has been sent successfully."  
✅ **Form resets** → Ready for next message  

## Email Format You'll Receive:

**Subject:** New submission from Portfolio Contact Form

**Body:**
```
Name: [User's Name]
Email: [User's Email]

Message:
[User's Message]

---
This message was sent from your portfolio contact form.
```

## Free Tier:
- 50 submissions per month (free)
- Perfect for portfolio websites
- No spam protection needed
- Works immediately

## That's It! 🎉

Your contact form will now work perfectly and send all messages directly to your email inbox. No more error messages - just clean, working email delivery!

