// ** deps
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type DataType = {
  status: string;
  error?: string;
};

const sendMail = async (
  req: NextApiRequest,
  res: NextApiResponse<DataType>,
) => {
  const { firstName, lastName, email, companyName, phoneNumber, message } =
    req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: "Mail from my website",
      html: `
      <div>
      
        <h2>Name: ${firstName} ${lastName}</h2>
        <h3>Email: ${email}</h3>
        <h3>Company: ${companyName}</h3>
        <h3>Phone: ${phoneNumber}</h3>
        <p>Správa: ${message}</p>
      
      </div>`,
    });

    res.status(200).json({ status: "success" });
  } catch (error: any) {
    console.error("Error sending email", error);
    res.status(500).json({ status: "error", error: error.message });
  }
};

export default sendMail;
