import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AdminloginComponent } from './Adminlogin/Adminlogin.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Add_userComponent } from './add_user/add_user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './login/user.service';

import { ProductComponent } from './product_list/product_list.component';
import { ProductService } from './product_list/product.service';
import { Add_productComponent } from './add_product/add_product.component';
import { AddUserService } from './add_user/adduser.service';

import { AddProductService } from './add_product/add_product.service';
import { Edit_userComponent } from './edit_user/edit_user.component';
import { EditUserService } from './edit_user/edit_user.service';
import { Edit_productComponent } from './edit_product/edit_product.component';
import { EditProductService } from './edit_product/edit_product.service';
import { UserHomeComponent } from './user_home/user_home.component';
import { GetProductService } from './user_home/user_home.component.service';
import { ProductDetailsComponent } from './product_details/product_details.component';
import { ProductDetailsService } from './product_details/product_details.component.service';

import { SearchProductService } from './SearchProduct/SearchProduct.component.service';
import { SearchProductComponent } from './SearchProduct/SearchProduct.component';
import { CartComponent } from './ Cart/Cart.component';
import { CartService } from './ Cart/Cart.component.service';

import { CartProductDetailsComponent } from './CartProductDetails/CartProductDetails.component';
import { CartProductDetailsService } from './CartProductDetails/CartProductDetails.component.service';
import { UserOrdersComponent } from './UserOrders/UserOrders.component';
import { UserOrdersService } from './UserOrders/UserOrders.component.service';
import { UserOrderListComponent } from './UserOrderList/UserOrderList.component';
import { UserOrderListService } from './UserOrderList/UserOrderList.service';
import { AllOrderListService } from './AllOrderList/AllOrderList.service';
import { AllOrderListComponent } from './AllOrderList/AllOrderList.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent } from './user-list/user-list.component';



const routes: Route[] = [

   { path: '', redirectTo: '/MRlogin/home', pathMatch: 'full' },

  // the default component
 // { path: '', component: AdminloginComponent },

  {path: 'login' , component: AdminloginComponent},
  {path: 'Userlogin' , component: UserLoginComponent},
  {path: 'login/dashboard', component: DashboardComponent},

  { path: 'login/dashboard/user', component: LoginComponent },
  { path: 'login/dashboard/userlist', component: UserListComponent },

  {path: 'login/dashboard/product',component: ProductComponent},

  {path: 'login/dashboard/user/add_user',component: Add_userComponent},

  {path: 'login/dashboard/product/add_product',component: Add_productComponent},

  {path: 'login/dashboard/user/edit_user/:id',component: Edit_userComponent },
  {path: 'login/dashboard/product/edit_product/:id',component: Edit_productComponent },

  {path: 'MRlogin/home', component: UserHomeComponent, canActivate: [AppComponent]},


 
  {path: 'MRlogin/product_details/:id', component: ProductDetailsComponent},

  
  {path: 'MRlogin/search', component: SearchProductComponent},
  {path: 'MRlogin/cart', component: CartComponent},
  
  {path: 'MRlogin/cartEdit/:id', component: CartProductDetailsComponent},
  {path: 'MRlogin/cart/placeorder', component: UserOrdersComponent},
  {path: 'MRlogin/orders', component: UserOrderListComponent},
  {path: 'MRlogin/dashboard/orders', component: AllOrderListComponent},
  {path: 'UserRegister', component: UserRegisterComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    Add_userComponent,
    DashboardComponent,
    
   
    ProductComponent,
    Add_productComponent,
    
    Edit_userComponent,
    Edit_productComponent,
   
    UserHomeComponent,
    ProductDetailsComponent,
    
    SearchProductComponent,
    CartComponent,
   
    CartProductDetailsComponent,
    UserOrdersComponent,
    UserOrderListComponent,
    AllOrderListComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserListComponent
  
    
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    //DrService,
    ProductService,
    AddUserService,
    
    AddProductService,
    EditUserService,
    EditProductService,
  
    AppComponent,
    GetProductService,
    ProductDetailsService,
   
    SearchProductService,
    CartService,
    
    CartProductDetailsService,
    UserOrdersService,
    UserOrderListService,
    AllOrderListService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
