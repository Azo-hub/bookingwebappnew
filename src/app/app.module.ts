import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AddPropertyDetailsOwnerComponent } from './add-property-details-owner/add-property-details-owner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingPaymentMethodComponent } from './booking-payment-method/booking-payment-method.component';
import { FindSpacesThatSuitYouInnerComponent } from './find-spaces-that-suit-you-inner/find-spaces-that-suit-you-inner.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DiscoverAboutComponent } from './homepage/discover-about/discover-about.component';
import { FindspacesthatsuityourstyleComponent } from './homepage/findspacesthatsuityourstyle/findspacesthatsuityourstyle.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { GetInspiredForFamilyTripComponent } from './homepage/get-inspired-for-family-trip/get-inspired-for-family-trip.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListYourPropertyComponent } from './homepage/list-your-property/list-your-property.component';
import { MoreInfolikePeaceofmindComponent } from './homepage/more-infolike-peaceofmind/more-infolike-peaceofmind.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { SearchBarMediumDisplayComponent } from './homepage/search-bar-medium-display/search-bar-medium-display.component';
import { SearchBarComponent } from './homepage/search-bar/search-bar.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ListingProperty1Component } from './listing-property1/listing-property1.component';
import { ListingProperty2Component } from './listing-property2/listing-property2.component';
import { ListingProperty3Component } from './listing-property3/listing-property3.component';
import { NotificationModule } from './notification/notification.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AuthenticationService } from './service/authentication.service';
import { BookingService } from './service/booking.service';
import { NotificationService } from './service/notification.service';
import { PropertyService } from './service/property.service';
import { UserService } from './service/user.service';
import { SignupComponent } from './signup/signup.component';
import { TravellerLoginComponent } from './traveller-login/traveller-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthenticationTravellerGuard } from './guard/authenticationTraveller.guard';
import { AuthenticationOwnerGuard } from './guard/authentication-owner.guard';
import { RoleOwnerGuard } from './guard/role.guard';
import { RoleTravellerGuard } from './guard/role-traveller.guard';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SupportComponent } from './support/support.component';
import { MatStepperModule } from '@angular/material/stepper';
import { PropertyOwnerInfoComponent } from './property-owner-info/property-owner-info.component';
import { ContactPropertyOwnerComponent } from './contact-property-owner/contact-property-owner.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    GetInspiredForFamilyTripComponent,
    FindspacesthatsuityourstyleComponent,
    MoreInfolikePeaceofmindComponent,
    ListYourPropertyComponent,
    DiscoverAboutComponent,
    FooterComponent,
    SignupComponent,
    OwnerLoginComponent,
    TravellerLoginComponent,
    HomepageComponent,
    FindSpacesThatSuitYouInnerComponent,
    ForgetPasswordComponent,
    PropertyDetailsComponent,
    BookingPaymentMethodComponent,
    ListingProperty1Component,
    ListingProperty2Component,
    ListingProperty3Component,
    AddPropertyDetailsOwnerComponent,
    SearchBarMediumDisplayComponent,
    PrivacyPolicyComponent,
    UserProfileComponent,
    OrderDetailsComponent,
    EditPropertyComponent,
    EditUserComponent,
    SupportComponent,
    PropertyOwnerInfoComponent,
    ContactPropertyOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CarouselModule,
    HttpClientModule,
    NotificationModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule

  ],
  providers: [DatePipe, AuthenticationService, UserService, NotificationService,
    BookingService, PropertyService, AuthenticationTravellerGuard, AuthenticationOwnerGuard, RoleOwnerGuard, RoleTravellerGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, }],
  bootstrap: [AppComponent]
})
export class AppModule { }
