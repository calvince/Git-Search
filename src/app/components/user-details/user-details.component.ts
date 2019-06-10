import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user'
import { Repo } from '../../classes/repo'
import Typed from 'typed.js'
import { ServiceRequestService } from '../../service-http/service-request.service'



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  searchUsers = true;

  user: User;
  repo: Repo;
  username: string;

  constructor(private service: ServiceRequestService) { }

  getProfile() {
    this.service.getUsername(this.username);

    this.service.getUser();
    this.user = this.service.user;

    this.service.getRepos(this.username);
    this.repo = this.service.repo;
    console.log(this.repo);
  }
  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }

  ngOnInit() {
    this.service.getUser();
    this.user = this.service.user;

    this.service.getRepos(this.username);
    this.repo = this.service.repo;
    //typed js added to the page
    const options = {
      strings: ['Enter your username please.'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
 };
 const omonge = new Typed('.moringa', options);
  }

}
