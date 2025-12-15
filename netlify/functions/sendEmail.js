const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ msg: "Method Not Allowed" }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ msg: "Please provide all required fields" }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const clientMailOptions = {
    from: `"Worldstar" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank You for Reaching Out to Worldstar",
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for contacting Worldstar! We have received your message.</p>
      <p><strong>Your Message:</strong> ${message}</p>
      <p>We’ll get back to you shortly.</p>
      <p>— Worldstar Team</p>
    `,
  };

  const adminMailOptions = {
    from: `"Worldstar" <${process.env.EMAIL_USER}>`,
    to: "hassankalyar744@gmail.com",
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
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
