import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

declare var M: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  selectedUser: User;
  users:User[];
  constructor(private userService: UserService) {
    this.selectedUser = new User('','','','',new Date(),'','',null,'');
   }

  ngOnInit() {
    this.getUsers();
  }
  addUser(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.userService.putUser(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getUsers();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.userService.postUser(form.value)
      .subscribe(res => {
        this.getUsers();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }

  editUser(user: User) {
    this.selectedUser = user;
  }

  deleteUser(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.userService.deleteUser(_id)
        .subscribe(res => {
          this.getUsers();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.getUsers();
      //this.userService.selectedUser = new User('','','','',null,'','',null,'');
    }
  }
}
//3488175