import { TestBed } from '@angular/core/testing';

import { DockerImagesService } from './docker-images.service';

describe('DockerImagesService', () => {
  let service: DockerImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DockerImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
