import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { CustomHttpResponse } from 'src/app/model/custom-http-response';
import { NotificationService } from 'src/app/service/notification.service';
import { PropertyService } from 'src/app/service/property.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-bar-medium-display',
  templateUrl: './search-bar-medium-display.component.html',
  styleUrls: ['./search-bar-medium-display.component.css']
})
export class SearchBarMediumDisplayComponent implements OnInit, OnDestroy {

  searchBarMediumCheckInDate: any;
  searchBarMediumCheckOutDate: any;
  noOfGuest: string = "";
  searchBarMediumShowLoading: boolean = false;
  private subscriptions: Subscription[] = [];
  currentDate: Date = new Date();


  constructor(private propertyService: PropertyService, private authenticationService: AuthenticationService,
    private datePipe: DatePipe, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }




  onCheckDateAvailabilityMedium(): void {
    if (!this.authenticationService.isUserLoggedIn()) {
      this.sendNotification(NotificationType.ERROR, "You need to login to continue");;
    } else {

      let transformedSearchBarMediumCheckInDate = this.datePipe.transform(this.searchBarMediumCheckInDate, 'yyyy-MM-dd');
      let transformedSearchBarMediumCheckOutDate = this.datePipe.transform(this.searchBarMediumCheckOutDate, 'yyyy-MM-dd');


      this.searchBarMediumShowLoading = true;
      const formData = new FormData();
      formData.append("checkInDate", transformedSearchBarMediumCheckInDate);
      formData.append("checkOutDate", transformedSearchBarMediumCheckOutDate);
      // formData.append("propertyId" , this.property.id.toString());

      this.subscriptions.push(
        this.propertyService.checkDateAvailability(formData).subscribe(
          (response: CustomHttpResponse) => {
            this.sendNotification(NotificationType.SUCCESS, response.message);
            this.searchBarMediumShowLoading = false;

          },
          (error: HttpErrorResponse) => {
            this.sendNotification(NotificationType.ERROR, error.error.message);
            this.searchBarMediumShowLoading = false;
          }


        )
      );

    }
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


}
