import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userList = [];
  userModified = {
    username:"",
    name:"",
    email:""
  };
  userId = 0;

  public constructor() {}

  addUser(user){
    user.userId = this.userId;
    this.userId++;
    this.userList.push(user);
  }

  findItem(user){
    return this.userList[this.findIndex(user)];
  }

  findIndex(user){
    return this.userList.findIndex(e => e.userId === user.userId);
  }

  deleteUser(user){
    let found = this.findItem(user);
    if (found === undefined){
      return;
    }
    this.userList = this.userList.filter(e => e != found);
  }

  changePassword(user){
    let found = this.findItem(user);
    if (found === undefined){
      return;
    }
    found.password = user.password;
  }

  modifyUser(user){
    this.userModified = user;
  }

  updateUser(user){
    let index = this.findIndex(user);
    if (index === -1){
      return;
    }
    this.userList[index].username = user.username;
    this.userList[index].name = user.name;
    this.userList[index].email = user.email;
  }

}
