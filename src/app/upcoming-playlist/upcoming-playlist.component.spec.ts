import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingPlaylistComponent } from './upcoming-playlist.component';

describe('UpcomingPlaylistComponent', () => {
  let component: UpcomingPlaylistComponent;
  let fixture: ComponentFixture<UpcomingPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
