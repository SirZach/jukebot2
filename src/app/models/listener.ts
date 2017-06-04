export class Listener {
  constructor(fields: Partial<Listener>) {
    Object.assign(this, fields);
  }
  realname: string;
  username: string;
}