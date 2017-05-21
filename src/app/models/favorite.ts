export class Favorite {
  key: string;
  title: string;
  user: number;

  constructor(fields: Partial<Favorite>) {
    Object.assign(this, fields);
  }
}
