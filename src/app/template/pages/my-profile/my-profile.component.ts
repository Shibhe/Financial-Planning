import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user;
  userDetails: User = new User();

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("currentUser"));
  }

  editDetail(){
      let email = this.userDetails.user_Email;
      let password = this.userDetails.user_Password;
      let user_ID = this.user.user_ID;

      this.accountService.edit(email, password, user_ID)
                          .subscribe((data) => console.log(data));
  }

}
