import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy, EventEmitter, Output, AfterContentInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, findIndex } from 'rxjs';
import { NotificationType } from '../enum/notification-type.enum';
import { CheckInAndOutDate } from '../model/checkInAndOutDate';
import { CustomHttpResponse } from '../model/custom-http-response';
import { Property } from '../model/property';
import { NotificationService } from '../service/notification.service';
import { PropertyService } from '../service/property.service';
import { DatePipe } from '@angular/common';
import { Review } from '../model/review';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { InlineShareButtonsConfig } from 'sharethis-angular';
import { MetadataService } from '../service/metadata.service';




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
  ogImageUrl: string = "";
  ogDescription: string = "";
  ogTitle: string = "";
  bookedCheckInAndOutDate: CheckInAndOutDate[] = [];
  bookedCheckInDay: any[] = [];
  bookedCheckOutDay: any[] = [];



  inlineShareButtonsConfig: InlineShareButtonsConfig = {
    alignment: 'center', // alignment of buttons (left, center, right)
    color: 'social', // set the color of buttons (social, white)
    enabled: true, // show/hide buttons (true, false)
    font_size: 16, // font size for the buttons
    labels: 'cta', // button labels (cta, counts, null)
    language: 'en', // which language to use (see LANGUAGES)
    networks: [
      // which networks to include (see SHARING NETWORKS)
      'whatsapp',
      'linkedin',
      'messenger',
      'facebook',
      'twitter',
    ],
    padding: 12, // padding within buttons (INTEGER)
    radius: 4, // the corner radius on each button (INTEGER)
    show_total: true,
    size: 40, // the size of each button (INTEGER)
    url: "https://www.valencedirectbookingrentals.com", // (defaults to current url)
    image: "",
    description: `${this.property.propertyType}` + "-Book your vacation rentals: beach houses, cabins, condos &amp; more", // (defaults to og:description or twitter:description)
    title: `${this.property.name}`, // (defaults to og:title or twitter:title)

  };




  constructor(private activatedRoute: ActivatedRoute, @Optional() private metadataService: MetadataService,
    private propertyService: PropertyService, private datePipe: DatePipe,
    private router: Router, private notificationService: NotificationService, private meta: Meta) {

  }

  ngOnInit(): void {

    this.propertyId = this.activatedRoute.snapshot.paramMap.get("id");

    this.getEachProperty();
    this.getAllReviewsByProperty(this.propertyId);
    this.getCheckInAndOutDate();
    console.log("https://res.cloudinary.com/valencedirectbookingrentals/image/upload/c_fill/q_50/bookingwebapp_1" + `${this.propertyService.getAPropertyFromLocalCache().name}${this.propertyService.getAPropertyFromLocalCache().id}` + ".jpg");
    this.ogImageUrl = "https://res.cloudinary.com/valencedirectbookingrentals/image/upload/c_fill/q_50/bookingwebapp_1" + `${this.propertyService.getAPropertyFromLocalCache().name}${this.propertyService.getAPropertyFromLocalCache().id}` + ".jpg";
    this.ogDescription = `${this.property.propertyType}` + "-Book your vacation rentals: beach houses, cabins, condos &amp; more";
    this.ogTitle = `${this.property.name}`;

    if (this.metadataService) {
      this.metadataService.updateMetadataaa("https://res.cloudinary.com/valencedirectbookingrentals/image/upload/c_fill/q_50/bookingwebapp_1" + `${this.propertyService.getAPropertyFromLocalCache().name}${this.propertyService.getAPropertyFromLocalCache().id}` + ".jpg");
    }

    /* const ogTitle: MetaDefinition = {
       property: "og:title",
       content: this.ogTitle
     }
     const ogImageUrl: MetaDefinition = {
       property: "og:image",
       content: this.ogImageUrl
     }
     this.meta.addTags([ogTitle, ogImageUrl]);
 
     /* this.meta.updateTag({ property: 'og:title', content: this.ogTitle });
      this.meta.updateTag({ property: "og:description", content: this.ogDescription });
      this.meta.updateTag({ property: 'og:image', content: this.ogImageUrl });
      this.meta.updateTag({ property: 'og:url', content: `https://www.valencedirectbookingrentals.com/propertydetails/${this.property.id}` });*/


  }


  myFilter1 = (d: Date): boolean => {
    //const day = d.getDay();
    for (const bookedCheckInDate of this.bookedCheckInAndOutDate) {
      const d2 = new Date(bookedCheckInDate.checkInDate);
      this.bookedCheckInDay.push(d2);

    }

    return this.bookedCheckInDay.findIndex((value) => d.getDate() === value.getDate()) === -1;

  }

  myFilter2 = (d: Date): boolean => {
    //const day = d.getDay();
    for (const bookedCheckOutDate of this.bookedCheckInAndOutDate) {
      const d2 = new Date(bookedCheckOutDate.checkOutDate);
      this.bookedCheckOutDay.push(d2);

    }

    return this.bookedCheckOutDay.findIndex((value) => d.getDate() === value.getDate()) === -1;

  }

  getCheckInAndOutDate(): void {

    const formData = new FormData();
    formData.append("propertyId", this.propertyId);

    this.subscriptions.push(
      this.propertyService.getCheckInAndOutDate(formData).subscribe(
        (response: CheckInAndOutDate[]) => {
          this.bookedCheckInAndOutDate = response;

        },
        (error: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, error.error.message);

        }


      )
    );
  }


  getEachProperty(): void {

    const formData = new FormData();
    formData.append("propertyId", this.propertyId);
    this.subscriptions.push(

      this.propertyService.getPropertyById(formData).subscribe(
        (response: Property) => {
          //this.uService.addUsersToLocalCache(response);
          this.propertyService.addAPropertyToLocalCache(response);
          this.property = response;
          //  this.propertyName = response.name;
          // this.property_Id = response.id;

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
