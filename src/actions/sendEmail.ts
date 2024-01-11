"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

export const sendEmail = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log("Running on the server");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form<onboarding@resend.mail>",
      to: "Makwaje999@gmail.com",
      subject: "Message your portfolio website",
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    error: getErrorMessage(error);
    console.log(error);
  }
  console.log(data);
  return { data };
};
