import { Injectable } from '@angular/core';
import { DockerImage } from 'src/app/interfaces/docker-image'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DockerImagesService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<DockerImage[]> {
    const data = [
      {
        id: 1,
        name: 'nginx',
        tag: 'nginx:1.0.0',
        description: 'web server',
        created_at: new Date()
      },
      {
        id: 1,
        name: 'nginx',
        tag: 'nginx:1.0.0',
        description: 'web server',
        created_at: new Date()
      },
      {
        id: 1,
        name: 'nginx',
        tag: 'nginx:1.0.0',
        description: 'web server',
        created_at: new Date()
      }
    ]

    return of(data).pipe(
      delay(3000)
    );
  }
}
