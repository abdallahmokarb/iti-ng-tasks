import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
})
export class Login {
  user = {
    email: '',
    password: '',
  };

  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      alert(
        `Login Successful to am.com \n\n Email : ${this.user.email} \n Password : ${this.user.password}`
      );
      console.log('User Login Data :', this.user);
    }
  }
}
