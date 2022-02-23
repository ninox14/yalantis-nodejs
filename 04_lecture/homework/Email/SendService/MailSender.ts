import { Options } from 'nodemailer/lib/mailer';
import { ISender } from './SenderInterface';
import { createTransport } from 'nodemailer';

export class MailSender implements ISender {
  transporter = createTransport({
    host: 'blablabla.com',
    port: 587,
    secure: false,
    requireTLS: true,
    logger: true,
  });
  public async sendMail(mail: Options): Promise<void> {
    try {
      await this.transporter.sendMail(mail);
      console.log('sent');
    } catch (e) {
      console.error(e);
    }
  }
}
