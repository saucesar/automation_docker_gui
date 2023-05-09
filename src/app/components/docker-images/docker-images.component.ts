import { Component, OnInit, Renderer2 } from '@angular/core';
import { DockerImagesService } from 'src/app/services/docker-images.service';
import { DockerImage } from 'src/app/interfaces/docker-image'

@Component({
  selector: 'app-docker-images',
  templateUrl: './docker-images.component.html',
  styleUrls: ['./docker-images.component.scss']
})
export class DockerImagesComponent implements OnInit {
  images: DockerImage[] = []
  loading: boolean = true

  constructor(
    private dockerImageService: DockerImagesService,
    private renderer: Renderer2,
  )
  {}

  ngOnInit() {
    this.getImages()
  }

  getImages() {
    this.enableLoading()
    this.dockerImageService.getAll().subscribe(
      (images) => {
        this.images = images
        this.disableLoading()
      }
    )
  }

  get buttonReload() {
    return this.renderer.selectRootElement("#button-reload")
  }

  enableLoading() {
    this.loading = true
    this.buttonReload.classList.add('fa-spin')
  }

  disableLoading() {
    this.loading = false
    this.buttonReload.classList.remove('fa-spin')
  }
}
