export class User {
  provider: string;
  uid: string;
  name: string;
  email: string;
  properties: any;

  constructor(fields: Partial<User>) {
    Object.assign(this, fields);
  }
}
