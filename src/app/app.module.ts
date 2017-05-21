import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { CurrentlyPlayingComponent } from './currently-playing/currently-playing.component';
import { UpcomingPlaylistComponent } from './upcoming-playlist/upcoming-playlist.component';
import { RelatedPlaylistComponent } from './related-playlist/related-playlist.component';

import { VideoService } from './services/video.service';
import { VideoSearchComponent } from './video-search/video-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SidebarComponent,
    CardComponent,
    CurrentlyPlayingComponent,
    UpcomingPlaylistComponent,
    RelatedPlaylistComponent,
    VideoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
