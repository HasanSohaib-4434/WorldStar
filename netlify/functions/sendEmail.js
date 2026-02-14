const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, company, phone, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ msg: "Please provide all required fields" }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  // Professional Client Email Template
  const clientMailOptions = {
    from: `"Worldstar Global" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank You for Reaching Out - Worldstar Global",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Worldstar Global - Thank You</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                
                <!-- Header Banner with Website Preview -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 0; position: relative;">
                    <a href="https://worldstar.global/" target="_blank" style="display: block; text-decoration: none;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 40px 30px; text-align: center;">
                            <img src="https://worldstar.global/logo.png" alt="Worldstar Global Logo" style="max-width: 180px; height: auto; margin-bottom: 15px;" />
                            <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">WORLDSTAR GLOBAL</h1>
                            <p style="color: #ffffff; font-size: 14px; margin: 8px 0 0 0; opacity: 0.95;">Your Success, Our Mission</p>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </td>
                </tr>

                <!-- Main Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h2 style="color: #333333; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">Hello ${name}! 👋</h2>
                    
                    <p style="color: #555555; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
                      Thank you for reaching out to <strong>Worldstar Global</strong>! We're thrilled to hear from you and truly appreciate you taking the time to connect with us.
                    </p>

                    <div style="background: linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%); border-left: 4px solid #667eea; padding: 25px; border-radius: 8px; margin: 25px 0;">
                      <h3 style="color: #667eea; font-size: 18px; margin: 0 0 15px 0; font-weight: 600;">📋 Your Submission Details</h3>
                      
                      <table width="100%" cellpadding="8" cellspacing="0">
                        <tr>
                          <td style="color: #666666; font-size: 14px; padding: 8px 0; width: 120px; font-weight: 600;">Name:</td>
                          <td style="color: #333333; font-size: 14px; padding: 8px 0;">${name}</td>
                        </tr>
                        <tr>
                          <td style="color: #666666; font-size: 14px; padding: 8px 0; font-weight: 600;">Email:</td>
                          <td style="color: #333333; font-size: 14px; padding: 8px 0;">${email}</td>
                        </tr>
                        ${company ? `
                        <tr>
                          <td style="color: #666666; font-size: 14px; padding: 8px 0; font-weight: 600;">Company:</td>
                          <td style="color: #333333; font-size: 14px; padding: 8px 0;">${company}</td>
                        </tr>
                        ` : ''}
                        ${phone ? `
                        <tr>
                          <td style="color: #666666; font-size: 14px; padding: 8px 0; font-weight: 600;">Phone:</td>
                          <td style="color: #333333; font-size: 14px; padding: 8px 0;">${phone}</td>
                        </tr>
                        ` : ''}
                        <tr>
                          <td style="color: #666666; font-size: 14px; padding: 8px 0; font-weight: 600; vertical-align: top;">Message:</td>
                          <td style="color: #333333; font-size: 14px; padding: 8px 0; line-height: 1.6;">${message}</td>
                        </tr>
                      </table>
                    </div>

                    <p style="color: #555555; font-size: 16px; line-height: 1.8; margin: 20px 0;">
                      Our team will review your message and get back to you within <strong>24-48 hours</strong>. We're excited about the opportunity to work together!
                    </p>

                    <div style="text-align: center; margin: 30px 0;">
                      <a href="https://worldstar.global/" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 25px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);">
                        Visit Our Website
                      </a>
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                    <p style="color: #666666; font-size: 14px; margin: 0 0 15px 0; line-height: 1.6;">
                      <strong>Worldstar Global</strong><br/>
                      Empowering businesses worldwide with innovative solutions
                    </p>
                    
                    <div style="margin: 20px 0;">
                      <a href="https://worldstar.global/" target="_blank" style="color: #667eea; text-decoration: none; margin: 0 10px; font-size: 14px;">🌐 Website</a>
                      <span style="color: #cccccc;">|</span>
                      <a href="mailto:${process.env.EMAIL_USER}" style="color: #667eea; text-decoration: none; margin: 0 10px; font-size: 14px;">✉️ Email</a>
                    </div>

                    <p style="color: #999999; font-size: 12px; margin: 15px 0 0 0;">
                      © ${new Date().getFullYear()} Worldstar Global. All rights reserved.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  // Professional Admin Email Template
  const adminMailOptions = {
    from: `"Worldstar Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `🔔 New Contact Form Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                
                <!-- Admin Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; font-size: 26px; margin: 0; font-weight: 600;">🔔 New Contact Form Submission</h1>
                    <p style="color: #ffffff; font-size: 14px; margin: 10px 0 0 0; opacity: 0.95;">Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
                  </td>
                </tr>

                <!-- Admin Content -->
                <tr>
                  <td style="padding: 35px 30px;">
                    
                    <div style="background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%); border-left: 4px solid #e53e3e; padding: 20px; border-radius: 8px; margin: 0 0 25px 0;">
                      <p style="color: #c53030; font-size: 14px; margin: 0; font-weight: 600;">⚡ ACTION REQUIRED: New customer inquiry</p>
                    </div>

                    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 25px; margin: 0 0 25px 0;">
                      <h3 style="color: #333333; font-size: 18px; margin: 0 0 20px 0; font-weight: 600; border-bottom: 2px solid #11998e; padding-bottom: 10px;">👤 Contact Information</h3>
                      
                      <table width="100%" cellpadding="10" cellspacing="0">
                        <tr>
                          <td style="color: #666666; font-size: 15px; font-weight: 600; width: 140px; vertical-align: top;">Full Name:</td>
                          <td style="color: #333333; font-size: 15px; font-weight: 500;">${name}</td>
                        </tr>
                        <tr>
                          <td style="color: #666666; font-size: 15px; font-weight: 600; vertical-align: top;">Email Address:</td>
                          <td style="color: #11998e; font-size: 15px; font-weight: 500;"><a href="mailto:${email}" style="color: #11998e; text-decoration: none;">${email}</a></td>
                        </tr>
                        ${company ? `
                        <tr>
                          <td style="color: #666666; font-size: 15px; font-weight: 600; vertical-align: top;">Company:</td>
                          <td style="color: #333333; font-size: 15px; font-weight: 500;">${company}</td>
                        </tr>
                        ` : ''}
                        ${phone ? `
                        <tr>
                          <td style="color: #666666; font-size: 15px; font-weight: 600; vertical-align: top;">Phone Number:</td>
                          <td style="color: #333333; font-size: 15px; font-weight: 500;"><a href="tel:${phone}" style="color: #11998e; text-decoration: none;">${phone}</a></td>
                        </tr>
                        ` : ''}
                      </table>
                    </div>

                    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 25px;">
                      <h3 style="color: #333333; font-size: 18px; margin: 0 0 15px 0; font-weight: 600; border-bottom: 2px solid #11998e; padding-bottom: 10px;">💬 Customer Message</h3>
                      <p style="color: #333333; font-size: 15px; line-height: 1.8; margin: 0; white-space: pre-wrap; background-color: #ffffff; padding: 20px; border-radius: 6px; border-left: 3px solid #11998e;">${message}</p>
                    </div>

                    <div style="text-align: center; margin: 30px 0 10px 0;">
                      <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 25px; font-size: 15px; font-weight: 600; margin: 0 5px; box-shadow: 0 4px 12px rgba(17, 153, 142, 0.4);">
                        Reply to ${name}
                      </a>
                    </div>

                  </td>
                </tr>

                <!-- Admin Footer -->
                <tr>
                  <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
                    <p style="color: #999999; font-size: 12px; margin: 0;">
                      This is an automated notification from Worldstar Global Contact Form<br/>
                      © ${new Date().getFullYear()} Worldstar Global
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(adminMailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "success" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "fail", error: error.message }),
    };
  }
};