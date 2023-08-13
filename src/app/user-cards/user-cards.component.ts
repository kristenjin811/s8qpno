import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from 'src/user';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent {
  users: User[]=[]
  showDOB: boolean=false 
  constructor(private userService: UserService) {
    for (let i = 0; i<20; i++) {
      this.userService.getUsers().subscribe((data)=> {
        this.users.push(...data.results);
        // pushing all user to the users list 
      })
    }
  }

  toggleDOB(user: User) {
    user.showDOB = !user.showDOB;
  }
}
