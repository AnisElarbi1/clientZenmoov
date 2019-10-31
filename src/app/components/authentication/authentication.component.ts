import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from '../../services/authentication.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  private login: string;
  private motDePasse: string;
  errorMessage = 'Veuillez vérifier vos coordonnées.';
  invalidLogin = false;

  constructor(private authenticationService: AuthenticationService, private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
  }


  authenticate() {
    this.spinner.show();
    this.authenticationService.login(this.login, this.motDePasse).subscribe(data => {
        setTimeout(() => {
          this.spinner.hide();
          this.router.navigate(['clients']);
          this.invalidLogin = false;
        }, 2000);
      }, err => {
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
        if (err.status === 401) {
          this.invalidLogin = true;
        }
        if (err.status === 500) {

        }
      }
    );
  }

}
