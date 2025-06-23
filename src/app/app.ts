import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Portfolio } from './components/portfolio/portfolio';
import { Skills } from './components/skills/skills';
import { About } from './components/about/about';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { UsersList } from './components/users/users-list/users-list';
import { TodoApp } from './components/todo-main/todo-main';
import { ProductsList } from './components/products-list/products-list';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    // Hero,
    // About,
    // Skills,
    // Portfolio,
    Footer,
    // UsersListComponent,
    // TodoAppComponent,
    // ProductsList,
    RouterOutlet,
  ],
  templateUrl: './app.html',
})
export class App {
  constructor(private auth: AuthService) {
    this.auth.login('adminUser', 'admin'); // u can make it admin
  }
}
