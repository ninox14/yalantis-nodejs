import { Options } from 'nodemailer/lib/mailer';
import { TAbstractEmail } from './TAbstractEmail';

interface CreatedUserPayload {
  date: Date;
  userName: string;
  userEmail: string;
}

export class TUserCreated extends TAbstractEmail<CreatedUserPayload> {
  protected readonly _importance = 1;

  constructor(params: CreatedUserPayload) {
    super(params);
  }

  public getMessageContent(): Options {
    return {
      from: 'example@mail.com',
      to: this._params.userEmail,
      subject: 'Registration at blablabla.com',
      html: this.getBody(),
    };
  }

  getBody() {
    return `
    <div>Dear ${this._params.userName}</div>
    <div>Thank You for registering!</div>
    <div>Date: ${this._params.date}</div>
    `;
  }
}
