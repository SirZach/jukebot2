import { Injectable } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from '../models/video';
declare var io:any;

@Injectable()
export class WebsocketService {

  constructor(
    private videoService: VideoService
  ) {

  }


}
