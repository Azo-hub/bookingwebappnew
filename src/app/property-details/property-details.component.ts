import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationType } from '../enum/notification-type.enum';
import { CheckInAndOutDate } from '../model/checkInAndOutDate';
import { CustomHttpResponse } from '../model/custom-http-response';
import { Property } from '../model/property';
import { NotificationService } from '../service/notification.service';
import { PropertyService } from '../service/property.service';
import { DatePipe } from '@angular/common';
import { Review } from '../model/review';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Meta } from '@angular/platform-browser';




@Component({
  selector: 'app-property-details',

  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit, OnDestroy {
  propertyId: string | null = "";
  private subscriptions: Subscription[] = [];
  property: Property = new Property;
  showLoading: boolean = false;
  checkInDate: any;
  checkOutDate: any;
  noOfGuest: number;
  noOfChildren: number;
  pets: string = "";
  showPropertyAvailabilityTable: boolean = false;
  showPropertyPricesTable: boolean = false;
  noOfNight: number = 0;
  noOfDays: number = 0;
  showBookProceedButton: boolean = false;
  showBookNowButton: boolean = false;
  reviews: Review[] = [];
  currentDate: Date = new Date();
  meta: Meta;




  constructor(private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService, private datePipe: DatePipe,
    private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.propertyId = this.activatedRoute.snapshot.paramMap.get("id");

    this.getEachProperty();
    this.getAllReviewsByProperty(this.propertyId);


    this.meta.updateTag({ property: "og:image:type", content: "image/jpg" });
    this.meta.updateTag({ property: "og:image:width", content: "1024" });
    this.meta.updateTag({ property: "og:image:height", content: "1024" });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:locale", content: "en" });
    this.meta.updateTag({ property: 'og:site_name', content: "Valence Direct Booking Rentals | Book your vacation rentals: beach houses, cabins, condos &amp; more" });
    this.meta.updateTag({ property: 'og:title', content: "Book your vacation rentals: beach houses, cabins, condos &amp; more | Valence Direct Booking Rentals" });
    this.meta.updateTag({ property: 'og:description', content: "Book your vacation rentals: beach houses, cabins, condos &amp; more" });
    this.meta.updateTag({
      property: 'og:image', content: "https://www.valencedirectbookingrentals.com/assets/customImage/bookingLogo.jpeg"
    });

  }

  getEachProperty(): void {

    const formData = new FormData();
    formData.append("propertyId", this.propertyId);
    this.subscriptions.push(

      this.propertyService.getPropertyById(formData).subscribe(
        (response: Property) => {
          //this.uService.addUsersToLocalCache(response);
          this.property = response;

          console.log(this.property);

        },
        (errorResponse: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, errorResponse.error.message);

        }
      )
    );

  }


  getAllReviewsByProperty(propertyId: string): void {
    const formData = new FormData();
    formData.append("propertyId", propertyId);
    this.subscriptions.push(
      this.propertyService.getReviewsByProperty(formData).subscribe(
        (response: Review[]) => {
          this.reviews = response;
        },

        (errorResponse: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, errorResponse.error.message);

        }
      )
    );

  }


  onCheckPropertyAvailabilityButtonEvent(): void {


    this.showPropertyAvailabilityTable = true;
    this.showBookNowButton = true;
  }



  onCheckPropertyAvailability(): void {
    this.showLoading = true;
    let trnaformedCheckInDate = this.datePipe.transform(this.checkInDate, 'yyyy-MM-dd');
    let trnaformedCheckOutDate = this.datePipe.transform(this.checkOutDate, 'yyyy-MM-dd');
    const formData = new FormData();
    formData.append("checkInDate", trnaformedCheckInDate);
    formData.append("checkOutDate", trnaformedCheckOutDate);
    formData.append("propertyId", this.property.id.toString());
    // console.log(checkInAndOutDate.checkInDate.value.toString());
    //console.log(checkInAndOutDate.checkOutDate.toString());
    // console.log(checkPropertAvailabilityForm.value.propertyId.toString());
    this.subscriptions.push(
      this.propertyService.checkPropertyAvailability(formData).subscribe(
        (response: CustomHttpResponse) => {
          this.sendNotification(NotificationType.SUCCESS, response.message);
          this.showLoading = false;
          const d1 = new Date(this.checkOutDate);
          const d2 = new Date(this.checkInDate);
          //this.noOfNight = +this.checkOutDate - +this.checkInDate;
          this.noOfNight = d1.getTime() - d2.getTime();
          this.noOfDays = Math.ceil(this.noOfNight / (1000 * 3600 * 24));
          this.showPropertyPricesTable = true;
          this.showBookProceedButton = true;
        },
        (error: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, error.error.message);
          this.showLoading = false;
        }


      )
    );
  }


  onClickContactPropertyOwner() {
    this.router.navigateByUrl(`/contactPropertyOwner/${this.property.propertyOwner.username}/${this.property.name}`);

  }




  private sendNotification(notificationType: NotificationType, message: string) {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType,
        "An error occurred. Please Try Again Later");
    }
  }



  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }



}
