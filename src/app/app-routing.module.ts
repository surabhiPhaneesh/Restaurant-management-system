import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "./shared/guard/auth.guard";
import { DashboardGuard } from "./shared/guard/dashboard.guard";
import { AddItemComponent } from "./admin-panel/add-item/add-item.component";
import { ViewItemComponent } from './admin-panel/view-item/view-item.component';
import { BookingComponent } from './admin-panel/booking/booking.component';
import { DishesComponent } from './customer-panel/dishes/dishes.component';
import { CartComponent } from './customer-panel/cart/cart.component';
import { TableReserveComponent } from './customer-panel/table-reserve/table-reserve.component';
import { ProfileComponent } from './customer-panel/profile/profile.component';
import { DescriptiomComponent } from './customer-panel/descriptiom/descriptiom.component';
import { HistoryComponent } from './admin-panel/history/history.component';
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'register-user',component:SignUpComponent},
  {
    path:'admin-panel',
    component:AdminPanelComponent,
    children:[
              
               {path:'add-item',component:AddItemComponent},
              {path:'view-item',component:ViewItemComponent},
              {path:'booking',component:BookingComponent},
              {path:'history',component:HistoryComponent}
            ],
              canActivate:[DashboardGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
                {path:'',component:DescriptiomComponent},
                {path:'dishes',component:DishesComponent},
                {path:'cart',component:CartComponent},
                {path:'reserve',component:TableReserveComponent},
                {path:'profile',component:ProfileComponent}
            ],
    canActivate: [AuthGuard]
  },
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'verify-email-address',component:VerifyEmailComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
