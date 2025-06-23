import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../../models/IUser';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.css'],
})
export class UsersList {
  searchEmail = '';
  allUsers: IUser[] = [
    {
      id: 1,
      profilePic:
        'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740',
      username: 'Hassan ELdash',
      email: 'hassan@iti.com',
      phone: '01000000001',
      birthdate: '1994-01-01',
      role: 'admin',
    },
    {
      id: 2,
      profilePic:
        'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740',
      username: 'abdallah',
      email: 'abdallah@gmail.com',
      phone: '01000000002',
      birthdate: '1996-01-01',
      role: 'user',
    },
    {
      id: 3,
      profilePic:
        'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740',
      username: 'ahmed',
      email: 'ahmed@gmail.com',
      phone: '01000000003',
      birthdate: '1998-01-01',
      role: 'moderator',
    },
    {
      id: 4,
      profilePic:
        'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740',
      username: 'ali',
      email: 'ali@gmail.com',
      phone: '01000000003',
      birthdate: '2000-01-01',
      role: 'user',
    },
    {
      id: 5,
      profilePic:
        'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740',
      username: 'omar',
      email: 'omar@gmail.com',
      phone: '01000000003',
      birthdate: '2001-01-01',
      role: 'user',
    },
  ];

  users = this.allUsers;

  search() {
    this.users = this.allUsers.filter((u) =>
      u.email.toLowerCase().includes(this.searchEmail.toLowerCase())
    );
  }

  reset() {
    this.searchEmail = '';
    this.users = [...this.allUsers];
  }

  trackById(index: number, user: IUser): number {
    return user.id;
  }
}
