import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AuthGuardService } from './auth-guard.service';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { PostProductComponent } from './post-product/post-product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import{CommentsComponent} from './comments/comments.component';
//import { CartComponent } from './main-cart/main-cart.component';
import { ConsultationComponent } from './consultation/consultation.component';
import{CartComponent} from './cart/cart.component';
import{SearchComponent} from './search/search.component'
import{OrderdetailsComponent} from './orderdetails/orderdetails.component'
import{MyordersComponent} from './myorders/myorders.component'

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },  
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/:id',
    component: CategoryComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'orders/:id',
    component: OrderdetailsComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/address',
    component: AddressComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/postproduct',
    component: PostProductComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/myproducts',
    component: MyProductsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/orders',
    component: MyordersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path:'consultation',
    component:ConsultationComponent
  },
  {
    path: 'create-comments',
    component: CommentsComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

//decorator to import and export routing Module in the application 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

