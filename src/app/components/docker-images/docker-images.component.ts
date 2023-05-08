import { Component, OnInit } from '@angular/core';
import { DockerImagesService } from 'src/app/services/docker-images.service';
import { DockerImage } from 'src/app/interfaces/docker-image'

@Component({
  selector: 'app-docker-images',
  templateUrl: './docker-images.component.html',
  styleUrls: ['./docker-images.component.scss']
})
export class DockerImagesComponent implements OnInit {
  images: DockerImage[] = []
  public loading: boolean = true

  constructor(
    private dockerImageService: DockerImagesService,
  )
  {}

  ngOnInit() {
    this.getImages()
  }

  getImages() {
    this.dockerImageService.getAll().subscribe(
      (images) => {
        this.images = images
        this.loading = false
      }
    )
  }

}
