import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user: any = null
  public isLoggedIn = false;

  constructor(
    private router: Router,
    private toast: ToastrService,
    private authService: AuthService,
    private eventService: EventService,
  )
  {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()
    this.isLoggedIn = this.authService.isLoggedIn

    this.eventService.loginEvent.subscribe(
      () => {
        this.isLoggedIn = true
        this.user = this.authService.getCurrentUser()
      }
    )

    this.eventService.logoutEvent.subscribe(
      () => {
        this.isLoggedIn = false
        this.user = null
      }
    )
  }

  get settingsIcon() {
    return document.getElementById('settings-icon')
  }

  public logout() {
    this.authService.logout()
    this.router.navigate(['/home'])
    this.toast.success('Sessão encerrada', 'Sucesso')
  }

  public mouseOver() {
    this.settingsIcon?.classList.add('fa-spin')
  }

  public mouseLeave() {
    this.settingsIcon?.classList.remove('fa-spin')
  }
}
