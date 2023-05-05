import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  loginEvent: EventEmitter<any> = new EventEmitter();
  logoutEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
