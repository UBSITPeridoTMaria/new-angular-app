import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent  } from './parts/home/home.component';
import { PaymentInfoComponent } from './AcctSettings/payment-info/payment-info.component'; //automatic na meron
import { UserBioComponent } from './AcctSettings/user-bio/user-bio.component'; // automatic na meron
import { UserProfileComponent } from './AcctSettings/user-profile/user-profile.component'; //automatic na meron

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent,

},
{
    path: 'profile',
    component: UserProfileComponent,
},
{
    path: 'payment',
    component: PaymentInfoComponent,
},
{
    path: 'user',
    component: UserBioComponent,
}
];
