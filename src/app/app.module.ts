import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import {NgbModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AboutUsComponent } from './about-us/about-us.component';


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
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
