import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyDetailsOwnerComponent } from './add-property-details-owner/add-property-details-owner.component';
import { BookingPaymentMethodComponent } from './booking-payment-method/booking-payment-method.component';
import { FindSpacesThatSuitYouInnerComponent } from './find-spaces-that-suit-you-inner/find-spaces-that-suit-you-inner.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthenticationOwnerGuard } from './guard/authentication-owner.guard';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AuthenticationTravellerGuard } from './guard/authenticationTraveller.guard';
import { RoleTravellerGuard } from './guard/role-traveller.guard';
import { RoleOwnerGuard } from './guard/role.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ListingProperty2Component } from './listing-property2/listing-property2.component';
import { ListingProperty3Component } from './listing-property3/listing-property3.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { SignupComponent } from './signup/signup.component';
import { TravellerLoginComponent } from './traveller-login/traveller-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RoleAdminGuard } from './guard/role-admin.guard';
import { SupportComponent } from './support/support.component';
import { PropertyOwnerInfoComponent } from './property-owner-info/property-owner-info.component';
import { ContactPropertyOwnerComponent } from './contact-property-owner/contact-property-owner.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "home", component: HomepageComponent },
  { path: "signup", component: SignupComponent },
  { path: "ownerLogin", component: OwnerLoginComponent },
  { path: "travellerLogin", component: TravellerLoginComponent },
  { path: "findSpacesThatSuitYouInner/:category", component: FindSpacesThatSuitYouInnerComponent },
  { path: "forgetpassword", component: ForgetPasswordComponent },
  { path: "propertydetails/:id", component: PropertyDetailsComponent },
  { path: "edit/property/:id", component: EditPropertyComponent, canActivate: [AuthenticationOwnerGuard, RoleOwnerGuard] },
  { path: "addNewProperty", component: AddPropertyDetailsOwnerComponent, canActivate: [AuthenticationOwnerGuard, RoleOwnerGuard] },
  { path: "listing2", component: ListingProperty2Component },
  { path: "listing3", component: ListingProperty3Component },
  { path: "booking/:noOfDays/:checkInDate/:checkOutDate/:id/:noOfGuest/:noOfChildren/:pets", component: BookingPaymentMethodComponent, canActivate: [AuthenticationTravellerGuard, RoleTravellerGuard] },
  { path: "privacyPolicy", component: PrivacyPolicyComponent },
  { path: "userProfile", component: UserProfileComponent, canActivate: [AuthenticationGuard] },
  { path: "orderCompleted", component: OrderDetailsComponent, canActivate: [AuthenticationTravellerGuard, RoleTravellerGuard] },
  { path: "userdetails/:username", component: EditUserComponent, canActivate: [AuthenticationOwnerGuard, RoleAdminGuard] },
  { path: "support", component: SupportComponent },
  { path: "orderDetails/:id", component: OrderDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: "propertyOwnerInfo/:username", component: PropertyOwnerInfoComponent },
  { path: "contactPropertyOwner/:username/:name", component: ContactPropertyOwnerComponent }

  //{path:"**", component:Error404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
