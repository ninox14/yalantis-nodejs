import { TAbstractEmail } from '../templates/TAbstractEmail';
import { SendMailOptions } from 'nodemailer';

export interface IMailCreator {
  getMessage<T>(template: TAbstractEmail<T>): SendMailOptions;
}
