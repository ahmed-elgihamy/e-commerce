import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { SinOutComponent } from './pages/sin-out/sin-out.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { MainSliderComponent } from './pages/home/component/main-slider/main-slider.component';
import { CategoriesSliderComponent } from './pages/home/component/categories-slider/categories-slider.component';
import { FeatureProductComponent } from './pages/home/component/feature-product/feature-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {HttpClientModule}   from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {  RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    CategoriesComponent,
    BrandsComponent,
    SinOutComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    CategoriesSliderComponent,
    FeatureProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
