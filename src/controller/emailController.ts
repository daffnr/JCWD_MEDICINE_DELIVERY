import { Request, Response } from "express";
import { Email, sendEmail} from "../services/emailService.ts";

export const createEmail = async (req: Request, res: Response) => {
    try {
        const { from, to, subject, template, context } : Email = req.body;
        const emailBody: Email = {
            from: process.env.EMAIL_USER as string,
            to: to,
            subject: subject,
            template: "emailTemplate",
            context: context
        };

        await sendEmail(emailBody);
        res.status(201).send({
            message: "Email sent successfull to" + emailBody,
        });
        

    } catch (error: any) {
        res.status(500).send({
            massage: "Error sending email",
            error: error.message,
        });
    }
}