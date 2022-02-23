import { MailCreator } from './Email/CreateService/MailCreator';
import { MailSender } from './Email/SendService/MailSender';
import { EmailService } from './notification.service';

const useCreate = async () => {
  const creator = new MailCreator();
  const sender = new MailSender();
  const email = new EmailService(creator, sender);
  const userService = new UserService();

  try {
    const { userName, userEmail } = userService.registerUser({
      name: 'guy',
      mail: 'lol@mail.ma',
      password: '1231231',
    });
    email.sendCreateUserMail(userName, userEmail);
  } catch (e) {
    console.log('someting went wrong');
    console.error(e);
  }
};
