export class Video {
  key: string;
  title: string;
  duration: number;
  user: string;
  realuser: string;
  startTime: string;
  thumbnail: string;
  playing: boolean;
  played: boolean;
  isSuggestion: boolean;

  constructor(fields: Partial<Video>) {
    Object.assign(this, fields);
  }
}