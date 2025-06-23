// not-found.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [CommonModule],
  template: `<div class="text-center text-2xl text-red-600 mt-10 h-[82vh]">
    <h1 class="pt-20 font-bold">404 - Page Not Found</h1>
  </div>`,
})
export class NotFound {}
