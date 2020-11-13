import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {environment} from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from "./shared/services/auth.service";
import { HomeComponent } from './components/home/home.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddItemComponent } from './admin-panel/add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { ViewItemComponent } from './admin-panel/view-item/view-item.component';
import { BookingComponent } from './admin-panel/booking/booking.component';
import { TableReserveComponent } from './customer-panel/table-reserve/table-reserve.component';
import { CartComponent } from './customer-panel/cart/cart.component';
import { ProfileComponent } from './customer-panel/profile/profile.component';
import { DishesComponent } from './customer-panel/dishes/dishes.component';
import { DescriptiomComponent } from './customer-panel/descriptiom/descriptiom.component';
import { DatePipe } from '@angular/common';
import { HistoryComponent } from './admin-panel/history/history.component'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    AdminPanelComponent,
    CarousalComponent,
    AddItemComponent,
    ViewItemComponent,
    BookingComponent,
    TableReserveComponent,
    CartComponent,
    ProfileComponent,
    DishesComponent,
    DescriptiomComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'RESTAURANT'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    FormsModule
  ],
  providers: [ AuthService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
