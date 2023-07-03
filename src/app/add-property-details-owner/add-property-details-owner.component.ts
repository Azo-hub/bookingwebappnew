import { HttpResponse, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationType } from '../enum/notification-type.enum';
import { Property } from '../model/property';
import { AuthenticationService } from '../service/authentication.service';
import { NotificationService } from '../service/notification.service';
import { PropertyService } from '../service/property.service';
import { NgForm } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CustomHttpResponse } from '../model/custom-http-response';
import { Review } from '../model/review';



@Component({
  selector: 'app-add-property-details-owner',
  templateUrl: './add-property-details-owner.component.html',
  styleUrls: ['./add-property-details-owner.component.css']
})


export class AddPropertyDetailsOwnerComponent implements OnInit, OnDestroy {

  showLoading: boolean = false;
  pictureShowLoading1: boolean;
  pictureShowLoading2: boolean;
  pictureShowLoading3: boolean;
  pictureShowLoading4: boolean;
  pictureShowLoading5: boolean;
  pictureShowLoading6: boolean;
  pictureShowLoading7: boolean;
  pictureShowLoading8: boolean;
  pictureShowLoading9: boolean;
  pictureShowLoading10: boolean;
  pictureShowLoading11: boolean;
  pictureShowLoading12: boolean;
  pictureShowLoading13: boolean;
  pictureShowLoading14: boolean;
  pictureShowLoading15: boolean;
  pictureShowLoading16: boolean;
  pictureShowLoading17: boolean;
  pictureShowLoading18: boolean;
  pictureShowLoading19: boolean;
  pictureShowLoading20: boolean;
  pictureShowLoading21: boolean;
  pictureShowLoading22: boolean;
  pictureShowLoading23: boolean;
  pictureShowLoading24: boolean;
  pictureShowLoading25: boolean;
  pictureShowLoading26: boolean;
  pictureShowLoading27: boolean;
  pictureShowLoading28: boolean;
  pictureShowLoading29: boolean;
  pictureShowLoading30: boolean;


  picture1showLoading: boolean;
  picture2showLoading: boolean;
  picture3showLoading: boolean;
  picture4showLoading: boolean;
  picture5showLoading: boolean;
  picture6showLoading: boolean;
  picture7showLoading: boolean;
  picture8showLoading: boolean;
  picture9showLoading: boolean;
  picture10showLoading: boolean;
  picture11showLoading: boolean;
  picture12showLoading: boolean;
  picture13showLoading: boolean;
  picture14showLoading: boolean;
  picture15showLoading: boolean;
  picture16showLoading: boolean;
  picture17showLoading: boolean;
  picture18showLoading: boolean;
  picture19showLoading: boolean;
  picture20showLoading: boolean;
  picture21showLoading: boolean;
  picture22showLoading: boolean;
  picture23showLoading: boolean;
  picture24showLoading: boolean;
  picture25showLoading: boolean;
  picture26showLoading: boolean;
  picture27showLoading: boolean;
  picture28showLoading: boolean;
  picture29showLoading: boolean;
  picture30showLoading: boolean;

  private subscriptions: Subscription[] = [];
  propertyId!: number | undefined;
  profileImage!: File;
  showImageUpload: boolean = false;
  showAddPropertySection: boolean = false;
  reviews: Review[] = [];
  showLoadingDone: boolean;
  showReview: boolean = false;


  states = [
    { value: "Alabama", label: "Alabama" }, { value: "Alaska", label: "Alaska" },
    { value: "Arizona", label: "Arizona" }, { value: "Arkansas", label: "Arkansas" },
    { value: "California", label: "California" }, { value: "Colorado", label: "Colorado" },
    { value: "Connecticut", label: "Connecticut" }, { value: "Delaware", label: "Delaware" },
    { value: "Florida", label: "Florida" }, { value: "Georgia", label: "Georgia" },
    { value: "Hawaii", label: "Hawaii" }, { value: "Idaho", label: "Idaho" },
    { value: "Illinois", label: "Illinois" }, { value: "Indiana", label: "Indiana" },
    { value: "Iowa", label: "Iowa" }, { value: "Kansas", label: "Kansas" },
    { value: "Kentucky[D]", label: "Kentucky[D]" }, { value: "Louisiana", label: "Louisiana" },
    { value: "Maine", label: "Maine" }, { value: "Maryland", label: "Maryland" },
    { value: "Massachusetts[D]", label: "Massachusetts[D]" }, { value: "Michigan", label: "Michigan" },
    { value: "Minnesota", label: "Minnesota" }, { value: "Mississippi", label: "Mississippi" },
    { value: "Missouri", label: "Missouri" }, { value: "Montana", label: "Montana" },
    { value: "Nebraska", label: "Nebraska" }, { value: "Nevada", label: "Nevada" },
    { value: "New Hampshire", label: "New Hampshire" }, { value: "New Jersey", label: "New Jersey" },
    { value: "New Mexico", label: "New Mexico" }, { value: "New York", label: "New York" },
    { value: "North Carolina", label: "North Carolina" }, { value: "North Dakota", label: "North Dakota" },
    { value: "Ohio", label: "Ohio" }, { value: "Oklahoma", label: "Oklahoma" },
    { value: "Oregon", label: "Oregon" }, { value: "Pennsylvania[D]", label: "Pennsylvania[D]" },
    { value: "Rhode Island", label: "Rhode Island" }, { value: "South Carolina", label: "South Carolina" },
    { value: "South Dakota", label: "South Dakota" }, { value: "Tennessee", label: "Tennessee" },

    { value: "Texas", label: "Texas" }, { value: "Utah", label: "Utah" },
    { value: "Vermont", label: "Vermont" }, { value: "Virginia[D]", label: "Virginia[D]" },
    { value: "Washington", label: "Washington" }, { value: "West Virginia", label: "West Virginia" },
    { value: "Wisconsin", label: "Wisconsin" }, { value: "Wyoming", label: "Wyoming" },
    { value: "District of Columbia", label: "District of Columbia" }
  ]



  constructor(private propertyService: PropertyService, private authenticationService: AuthenticationService,
    private router: Router, private notificationService: NotificationService,
    private http: HttpClient) { }

  ngOnInit(): void {
    if (!this.authenticationService.isUserLoggedIn()) {
      this.router.navigateByUrl("/");
      this.sendNotification(NotificationType.ERROR, "You need to log in to access add new property page!");
    }

  }




  public onAddNewProperty(property: Property): void {

    this.showLoading = true;

    this.subscriptions.push(
      this.propertyService.newProperty(property).subscribe(
        (response: HttpResponse<Property>) => {

          this.showLoading = false;
          this.sendNotification(NotificationType.SUCCESS, `Property ${response.body?.name} created successfully. Proceed to add property Images`);
          this.propertyId = response.body?.id;
          this.showAddPropertySection = true;
          this.showImageUpload = true;

        },
        (errorResponse: HttpErrorResponse) => {

          this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
          this.showLoading = false;
        }
      )
    );
  }




  imageUploadDone(): void {
    this.showImageUpload = false;
    this.showReview = true;
  }


  onPushReview(reviewForm: NgForm): void {
    /* this.reviews.push({content:reviewForm.value.reviewContent, 
                         author:reviewForm.value.reviewAuthor, 
                         location:reviewForm.value.reviewLocation}); */
    this.showLoading = true;

    const formData = new FormData();

    formData.append("reviewContent", reviewForm.value.reviewContent);
    formData.append("reviewAuthor", reviewForm.value.reviewAuthor);
    formData.append("reviewLocation", reviewForm.value.reviewLocation);
    formData.append("propertyId", this.propertyId.toString());
    console.log(reviewForm.value.reviewContent);
    console.log(reviewForm.value.reviewAuthor);
    console.log(reviewForm.value.reviewLocation);

    this.subscriptions.push(
      this.propertyService.addReview(formData).subscribe(
        (response: CustomHttpResponse) => {
          this.sendNotification(NotificationType.SUCCESS, response.message);
          this.showLoading = false;
          this.getAllReviewsByProperty(this.propertyId);
          this.showLoadingDone = true;
          /*this.router.navigateByUrl(`/propertydetails/${this.propertyId}`);*/
        },
        (error: HttpErrorResponse) => {
          this.sendNotification(NotificationType.WARNING, error.error.message);
          this.showLoading = false;
        }



      )
    );

    reviewForm.reset();

  }

  getAllReviewsByProperty(propertyId: number): void {
    const formData = new FormData();
    formData.append("propertyId", propertyId.toString());
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



  public host = environment.apiUrl;

  public onFileSelected1(file: File): void {
    this.pictureShowLoading1 = true;
    this.picture1showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage1`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading1 = false
        this.picture1showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading1 = false;
        this.picture1showLoading = false;
      }
    )




  }




  public onFileSelected2(file: File): void {
    this.pictureShowLoading2 = true;
    this.picture2showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage2`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading2 = false;
        this.picture2showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading2 = false;
        this.picture2showLoading = false;
      }
    )




  }



  public onFileSelected3(file: File): void {
    this.pictureShowLoading3 = true;
    this.picture3showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage3`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading3 = false;
        this.picture3showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading3 = false;
        this.picture3showLoading = false;
      }
    )




  }



  public onFileSelected4(file: File): void {
    this.pictureShowLoading4 = true;
    this.picture4showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage4`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading4 = false;
        this.picture4showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading4 = false;
        this.picture4showLoading = false;
      }
    )




  }




  public onFileSelected5(file: File): void {
    this.pictureShowLoading5 = true;
    this.picture5showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage5`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading5 = false;
        this.picture5showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading5 = false;
        this.picture5showLoading = false;
      }
    )




  }




  public onFileSelected6(file: File): void {
    this.pictureShowLoading6 = true;
    this.picture6showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage6`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading6 = false;
        this.picture6showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading6 = false;
        this.picture6showLoading = false;
      }
    )




  }





  public onFileSelected7(file: File): void {
    this.pictureShowLoading7 = true;
    this.picture7showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage7`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading7 = false;
        this.picture7showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading7 = false;
        this.picture7showLoading = false;
      }
    )




  }






  public onFileSelected8(file: File): void {
    this.pictureShowLoading8 = true;
    this.picture8showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage8`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading8 = false;
        this.picture8showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading8 = false;
        this.picture8showLoading = false;
      }
    )




  }







  public onFileSelected9(file: File): void {
    this.pictureShowLoading9 = true;
    this.picture9showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage9`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading9 = false;
        this.picture9showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading9 = false;
        this.picture9showLoading = false;
      }
    )




  }







  public onFileSelected10(file: File): void {
    this.pictureShowLoading10 = true;
    this.picture10showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage10`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading10 = false;
        this.picture10showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading10 = false;
        this.picture10showLoading = false;
      }
    )




  }








  public onFileSelected11(file: File): void {
    this.pictureShowLoading11 = true;
    this.picture11showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage11`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading11 = false;
        this.picture11showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading11 = false;
        this.picture11showLoading = false;
      }
    )




  }








  public onFileSelected12(file: File): void {
    this.pictureShowLoading12 = true;
    this.picture12showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage12`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading12 = false;
        this.picture12showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading12 = false;
        this.picture12showLoading = false;
      }
    )




  }










  public onFileSelected13(file: File): void {
    this.pictureShowLoading13 = true;
    this.picture13showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage13`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading13 = false;
        this.picture13showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading13 = false;
        this.picture13showLoading = false;
      }
    )




  }







  public onFileSelected14(file: File): void {
    this.pictureShowLoading14 = true;
    this.picture14showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage14`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading14 = false;
        this.picture14showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading14 = false;
        this.picture14showLoading = false;
      }
    )




  }







  public onFileSelected15(file: File): void {
    this.pictureShowLoading15 = true;
    this.picture15showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage15`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading15 = false;
        this.picture15showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading15 = false;
        this.picture15showLoading = false;
      }
    )




  }







  public onFileSelected16(file: File): void {
    this.pictureShowLoading16 = true;
    this.picture16showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage16`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading16 = false;
        this.picture16showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading16 = false;
        this.picture16showLoading = false;
      }
    )




  }






  public onFileSelected17(file: File): void {
    this.pictureShowLoading17 = true;
    this.picture17showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage17`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading17 = false;
        this.picture17showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading17 = false;
        this.picture17showLoading = false;
      }
    )




  }








  public onFileSelected18(file: File): void {
    this.pictureShowLoading18 = true;
    this.picture18showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage18`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading18 = false;
        this.picture18showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading18 = false;
        this.picture18showLoading = false;
      }
    )




  }





  public onFileSelected19(file: File): void {
    this.pictureShowLoading19 = true;
    this.picture19showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage19`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading19 = false;
        this.picture19showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading19 = false;
        this.picture19showLoading = false;
      }
    )




  }







  public onFileSelected20(file: File): void {
    this.pictureShowLoading20 = true;
    this.picture20showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage20`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading20 = false;
        this.picture20showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading20 = false;
        this.picture20showLoading = false;
      }
    )




  }








  public onFileSelected21(file: File): void {
    this.pictureShowLoading21 = true;
    this.picture21showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage21`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading21 = false;
        this.picture21showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading21 = false;
        this.picture21showLoading = false;
      }
    )




  }






  public onFileSelected22(file: File): void {
    this.pictureShowLoading22 = true;
    this.picture22showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage22`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading22 = false;
        this.picture22showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading22 = false;
        this.picture22showLoading = false;
      }
    )




  }






  public onFileSelected23(file: File): void {
    this.pictureShowLoading23 = true;
    this.picture23showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage23`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading23 = false;
        this.picture23showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading23 = false;
        this.picture23showLoading = false;
      }
    )




  }







  public onFileSelected24(file: File): void {
    this.pictureShowLoading24 = true;
    this.picture24showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage24`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading24 = false;
        this.picture24showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading24 = false;
        this.picture24showLoading = false;
      }
    )




  }






  public onFileSelected25(file: File): void {
    this.pictureShowLoading25 = true;
    this.picture25showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage25`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading25 = false;
        this.picture25showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading25 = false;
        this.picture25showLoading = false;
      }
    )




  }






  public onFileSelected26(file: File): void {
    this.pictureShowLoading26 = true;
    this.picture26showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage26`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading26 = false;
        this.picture26showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading26 = false;
        this.picture26showLoading = false;
      }
    )




  }








  public onFileSelected27(file: File): void {
    this.pictureShowLoading27 = true;
    this.picture27showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage27`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading27 = false;
        this.picture27showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading27 = false;
        this.picture27showLoading = false;
      }
    )




  }









  public onFileSelected28(file: File): void {
    this.pictureShowLoading28 = true;
    this.picture28showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage28`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading28 = false;
        this.picture28showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading28 = false;
        this.picture28showLoading = false;
      }
    )




  }





  public onFileSelected29(file: File): void {
    this.pictureShowLoading29 = true;
    this.picture29showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage29`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading29 = false;
        this.picture29showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading29 = false;
        this.picture29showLoading = false;
      }
    )




  }






  public onFileSelected30(file: File): void {
    this.pictureShowLoading30 = true;
    this.picture30showLoading = true;
    this.profileImage = file;

    const formData = new FormData();
    formData.append("propertyImage", this.profileImage);
    formData.append("propertyId", String(this.propertyId));

    const upload$ = this.http.post(`${this.host}/uploadPropertyImage30`, formData);

    upload$.subscribe(
      (response: any) => {
        this.pictureShowLoading30 = false;
        this.picture30showLoading = false;
        this.sendNotification(NotificationType.SUCCESS, `Image uploaded successfully.`);


      },
      (errorResponse: HttpErrorResponse) => {

        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.pictureShowLoading30 = false;
        this.picture30showLoading = false;
      }
    )




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
