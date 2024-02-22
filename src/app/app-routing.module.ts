import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { SinOutComponent } from './pages/sin-out/sin-out.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",canActivate:[authGuard] , component:HomeComponent},
{path:"brands",canActivate:[authGuard] ,  component:BrandsComponent},
{path:"cart",canActivate:[authGuard] , component:CartComponent},
{path:"product",canActivate:[authGuard] , component:ProductComponent},
{path:"productdetails" ,canActivate:[authGuard], component:ProductDetailsComponent},
{path:"login",  component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"sinout", component:SinOutComponent},
{path:"categories", canActivate:[authGuard] , component:CategoriesComponent},
{path:"notfound", component:NotfoundComponent},


{path:"**",component:NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
