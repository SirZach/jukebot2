import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//UI
import { MainNavComponent } from './ui/main-nav/main-nav.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { CardComponent } from './ui/card/card.component';
import { CurrentlyPlayingComponent } from './ui/currently-playing/currently-playing.component';
import { UpcomingPlaylistComponent } from './ui/upcoming-playlist/upcoming-playlist.component';
import { RelatedPlaylistComponent } from './ui/related-playlist/related-playlist.component';
import { VideoSearchComponent } from './ui/video-search/video-search.component';

import { VideoService } from './services/video.service';
import { GlobalService } from './services/global.service';
import { ListenerService } from './services/listener.service';
import { PluralizePipe } from './pipes/pluralize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SidebarComponent,
    CardComponent,
    CurrentlyPlayingComponent,
    UpcomingPlaylistComponent,
    RelatedPlaylistComponent,
    VideoSearchComponent,
    PluralizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    VideoService,
    GlobalService,
    ListenerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
