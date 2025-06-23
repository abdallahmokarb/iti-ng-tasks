import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
})
export class Register {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^\S+$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
      addresses: this.fb.array([]),
    });
  }

  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        address: ['', Validators.required],
        street: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required],
      })
    );
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      const data = this.form.value;

      const addressList = data.addresses
        .map(
          (a: any, i: number) =>
            `\n  ${i + 1}. ${a.address}, ${a.street}, ${a.city}, ${a.country}`
        )
        .join('');

      alert(
        `Registration successful to am.com \n\n` +
          `Email: ${data.email}\n` +
          `Name: ${data.name}\n` +
          `Username: ${data.username}\n` +
          `Addresses (${data.addresses.length}):${addressList || ' none'}`
      );

      console.log('Registration Form Data:', data);
    }
  }
}
