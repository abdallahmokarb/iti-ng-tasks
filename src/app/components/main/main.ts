import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Skills } from '../skills/skills';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { TodoApp } from '../todo-main/todo-main';
import { Portfolio } from '../portfolio/portfolio';
import { UsersList } from '../users/users-list/users-list';

@Component({
  selector: 'app-main',
  imports: [Skills, Hero, About, TodoApp, Portfolio, UsersList],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
