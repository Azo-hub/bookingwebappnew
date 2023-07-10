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
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  searchBarCheckInDate: any;
  searchBarCheckOutDate: any;
  searchBarNoOfGuest: string = "";
  searchBarShowLoading: boolean = false;
  private subscriptions: Subscription[] = [];
  currentDate: Date = new Date();


  constructor(private propertyService: PropertyService, private authenticationService: AuthenticationService,
    private datePipe: DatePipe, private notificationService: NotificationService) { }

  ngOnInit(): void {

  }

  


  onCheckDateAvailability(): void {
    if (!this.authenticationService.isUserLoggedIn()) {
      this.sendNotification(NotificationType.ERROR, "You need to login to continue");
    } else {

      let transformedSearchBarCheckInDate = this.datePipe.transform(this.searchBarCheckInDate, 'yyyy-MM-dd');
      let transformedSearchBarCheckOutDate = this.datePipe.transform(this.searchBarCheckOutDate, 'yyyy-MM-dd');

      this.searchBarShowLoading = true;
      const formData = new FormData();
      formData.append("checkInDate", transformedSearchBarCheckInDate);
      formData.append("checkOutDate", transformedSearchBarCheckOutDate);
      // formData.append("propertyId" , this.property.id.toString());

      this.subscriptions.push(
        this.propertyService.checkDateAvailability(formData).subscribe(
          (response: CustomHttpResponse) => {
            this.sendNotification(NotificationType.SUCCESS, response.message);
            this.searchBarShowLoading = false;

          },
          (error: HttpErrorResponse) => {
            this.sendNotification(NotificationType.ERROR, error.error.message);
            this.searchBarShowLoading = false;
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
