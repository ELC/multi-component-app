import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user;

  @Output() clickUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.user = {}
    this.cleanFields();
  }

  cleanFields(){
    this.user.username = "";
    this.user.name = "";
    this.user.email = "";
  }

  onClicked() {

    if (!this.user.username || !this.user.name || !this.user.email){
      return;
    }

    let user = {
      username:this.user.username,
      name:this.user.name,
      email:this.user.email,
      userId:undefined
    };

    if (!this.user.userId){
      user.userId = this.user.userId;
    }

    this.cleanFields();

    this.clickUser.emit(user)
  }

}
