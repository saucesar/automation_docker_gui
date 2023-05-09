import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.scss']
})
export class NavbarLateralComponent {
  constructor(private renderer: Renderer2)
  {}

  public mouseOver(elementId: string) {
    const element = this.renderer.selectRootElement(`#${elementId}`)
    element.classList.add('fa-beat')
  }

  public mouseLeave(elementId: string) {
    const element = this.renderer.selectRootElement(`#${elementId}`)
    element.classList.remove('fa-beat')
  }
}
