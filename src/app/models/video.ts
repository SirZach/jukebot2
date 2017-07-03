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
  playlistId: string;
  playlistItems: number;
  isSuggestion: boolean;
  id: number;

  constructor(fields: Partial<Video>) {
    Object.assign(this, fields);
  }
}