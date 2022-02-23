import { SendMailOptions } from 'nodemailer';

export abstract class TAbstractEmail<P extends {}> {
  protected abstract readonly _importance: -1 | 0 | 1;

  protected readonly _params: P;

  constructor(params: P) {
    this._params = params;
  }

  public abstract getMessageContent(): SendMailOptions;
  protected abstract getBody(): string;

  public isImportant(): -1 | 0 | 1 {
    return this._importance;
  }
}
