import { IMailCreator } from './Email/CreateService/CreateInterface';
import { ISender } from './Email/SendService/SenderInterface';
import { TUserCreated } from './Email/templates/TUserCreated';

export class EmailService {
  constructor(private creator: IMailCreator, private sender: ISender) {}
  public async sendCreateUserMail(userName: string, userEmail: string) {
    const template = new TUserCreated({
      date: new Date(),
      userEmail,
      userName,
    });
    const message = this.creator.getMessage(template);
    await this.sender.sendMail(message);
  }
}
