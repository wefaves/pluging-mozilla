import { TestBed, inject } from '@angular/core/testing';
import { BookmarksService } from './bookmarks.service';

describe('BookmarksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarksService]
    });
  });

  it('should ...', inject([BookmarksService], (service: BookmarksService) => {
    expect(service).toBeTruthy();
  }));
});
