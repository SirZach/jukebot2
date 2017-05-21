export class Chat {
  username: string;
  message: string;
  type: string;
  time: string;
  data: string;
  realuser: string;

  constructor(fields: Partial<Chat>) {
    Object.assign(this, fields);
  }
}
