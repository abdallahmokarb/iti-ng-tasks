import { Routes } from '@angular/router';
import { ProductsList } from './components/products-list/products-list';
import { ProductDetails } from './components/product-details/product-details';
import { NotFound } from './components/not-found/not-found';
import { Cart } from './components/cart/cart';
import { adminGuard } from './services/admin.guard';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { Main } from './components/main/main';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'products', component: ProductsList },
  { path: 'product-details/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'admin', component: AdminDashboard, canActivate: [adminGuard] },
  { path: '**', component: NotFound },
];
