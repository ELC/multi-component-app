import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  @Input() userList;

  @Output() deleteUser = new EventEmitter<any>();
  @Output() passwordChange = new EventEmitter<any>();
  @Output() modifyUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  delete(user){
    this.deleteUser.emit(user)
  }

  setPassword(user){
    let password = prompt("Please enter a password:");
    if (password == null || password == "") {
        return
    }

    user.password = password

    this.passwordChange.emit(user)
  }

  editUser(user){
    this.modifyUser.emit(Object.assign({},user))
  }


}
