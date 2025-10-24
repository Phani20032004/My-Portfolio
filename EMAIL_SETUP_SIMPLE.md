# Get Emails to Your Inbox - Simple Setup

## Option 1: Netlify Forms (Recommended - Free & Easy)

### Step 1: Deploy to Netlify
1. Go to [https://netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your entire portfolio folder to deploy
4. Your site will be live at a URL like: `https://your-site-name.netlify.app`

### Step 2: Configure Email Notifications
1. In your Netlify dashboard, go to "Forms"
2. You'll see your contact form listed
3. Click on "Settings" next to your form
4. Add your email: `phanisubrahmanyamnagidi@gmail.com`
5. Enable email notifications

### Step 3: Test
1. Visit your live site
2. Fill out the contact form
3. Check your Gmail inbox - you'll receive the message!

---

## Option 2: Formspree (Alternative)

### Step 1: Create Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with: `phanisubrahmanyamnagidi@gmail.com`
3. Create a new form
4. Copy your Form ID (looks like: `xrgkqyvw`)

### Step 2: Update Your Code
In `index.html`, find this line:
```html
<form class="contact-form" id="contactForm" name="contact" method="POST" data-netlify="true" novalidate>
```

Replace it with:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
```
(Replace `YOUR_FORM_ID` with your actual Form ID)

### Step 3: Test
1. Fill out the form on your website
2. Check your Gmail inbox

---

## Option 3: Simple Mailto (Quick Test)

If you want to test immediately, I can set up a simple mailto link that opens the user's email client.

---

## What You'll Receive

**Subject:** New Message from Portfolio Contact Form

**Body:**
```
Name: [User's Name]
Email: [User's Email]

Message:
[User's Message]

---
Sent from your portfolio contact form.
```

## Recommendation

**Use Netlify Forms** - it's the most reliable and free option. Just deploy your site to Netlify and configure the email notifications.

Which option would you like me to help you set up?

