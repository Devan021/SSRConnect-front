// emailUtils.js

const nodemailer = require('nodemailer');

// Configure nodemailer with Elastic Email SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com',
  port: 2525, // Elastic Email SMTP port
  secure: false, // false for TLS, true for SSL
  auth: {
    user: 'ssrconnect@gmail.com',
    pass: 'E10CEC4486846D9CCB74DCE9CBB88D36B748',
  },
});

const sendPasswordResetEmail = async (email, resetLink) => {
  const mailOptions = {
    from: 'your-email@example.com',
    to: email,
    subject: 'Password Reset Instructions',
    html: `
      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
      </head>

      <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; background-color: #F5F6F8;">

        <!-- Logo -->
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; text-align: center;">
          <img src="https://your-logo-url.png" width="150" height="46" alt="Logo" style="height: auto;">
        </div>

        <!-- Email Title -->
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; text-align: center; background-color: #ffffff;">
          <h2 style="color: #333;">SSR Connect</h2>
          <p>Hello ${email},</p>
          <p>We received a request to reset your password on SSR Connect. Please use the following link to set a new password:
          </p>
          <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px;">Reset
            Password</a>
          <p>If you didn't request a password reset, you can ignore this email. The link is valid for a limited time.</p>
          <p>If you have any questions or need assistance, feel free to contact us.</p>
          <p>Best regards,<br>SSR Connect Team</p>
        </div>

        <!-- Footer -->
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; text-align: center; background-color: #ffffff;">
          <img src="https://i.imgur.com/etqrRSr.jpg" width="100%" height="80%" alt="Footer Image" style="width: 100%; height: auto; display: block;">
        </div>

      </body>

      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending password reset email:', error.message);
    throw error;
  }
};

module.exports = {
  sendPasswordResetEmail,
};
