import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { MessageComponent } from './message/message.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductComponent } from './product/product.component';
import { SettingsComponent } from './settings/settings.component';
import { PostProductComponent } from './post-product/post-product.component';

import { DataService } from './data.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentCreateComponent } from './comments/comment-create/comment-create.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { AuthGuardService } from './auth-guard.service';
import { RestApiService } from './rest-api.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { FiltersComponent } from './shopping-cart/filters/filters.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { MainCartComponent } from './main-cart/main-cart.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegistrationComponent,
    AddressComponent,
    CategoriesComponent,
    CategoryComponent,
    MessageComponent,
    MyProductsComponent,
    ProductComponent,
    SettingsComponent,
    PostProductComponent,
    AboutUsComponent,
    CommentsComponent,
    CommentCreateComponent,
    CommentListComponent,
    ShoppingCartComponent,
    CartComponent,
    FiltersComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    MainCartComponent,
    ConsultationComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NgImageSliderModule
  ],
  providers: [RestApiService,DataService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
