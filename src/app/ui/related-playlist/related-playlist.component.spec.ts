import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPlaylistComponent } from './related-playlist.component';

describe('RelatedPlaylistComponent', () => {
  let component: RelatedPlaylistComponent;
  let fixture: ComponentFixture<RelatedPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
