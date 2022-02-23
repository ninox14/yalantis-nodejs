import { Options } from 'nodemailer/lib/mailer';
import { TAbstractEmail } from '../templates/TAbstractEmail';
import { IMailCreator } from './CreateInterface';

const getPriority = (importance: 0 | 1 | -1): 'high' | 'normal' | 'low' => {
  switch (importance) {
    case -1:
      return 'low';
    case 0:
      return 'normal';
    case 1:
      return 'high';
  }
};

export class MailCreator implements IMailCreator {
  public getMessage<T>(template: TAbstractEmail<T>): Options {
    return {
      ...template.getMessageContent(),
      priority: getPriority(template.isImportant()),
    };
  }
}
