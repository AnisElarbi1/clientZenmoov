import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.isUserLoggedIn = this.authenticationService.loggedIn();
  }
}
