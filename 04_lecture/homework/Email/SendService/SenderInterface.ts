import { SendMailOptions } from 'nodemailer';

export interface ISender {
  sendMail(mail: SendMailOptions): Promise<void>;
}
