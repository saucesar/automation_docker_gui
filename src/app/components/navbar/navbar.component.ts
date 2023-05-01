import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


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
    private authService: AuthService
  )
  {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()
    this.authService.isLoggedIn.subscribe(
      (loggedIn) => {
        this.isLoggedIn = loggedIn
      }
    )
  }

  public logout() {
    this.authService.logout()
    this.router.navigate(['/home'])
    this.toast.success('Sessão encerrada', 'Sucesso')
  }
}
