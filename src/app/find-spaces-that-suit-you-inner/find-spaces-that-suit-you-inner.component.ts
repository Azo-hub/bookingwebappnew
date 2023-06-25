import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';
import { AuthenticationService } from '../service/authentication.service';
import { NotificationService } from '../service/notification.service';
import { NotificationType } from '../enum/notification-type.enum';

@Component({
  selector: 'app-find-spaces-that-suit-you-inner',
  templateUrl: './find-spaces-that-suit-you-inner.component.html',
  styleUrls: ['./find-spaces-that-suit-you-inner.component.css']
})
export class FindSpacesThatSuitYouInnerComponent implements OnInit, OnDestroy {

  allhousesType: string | null = "";
  private subscriptions: Subscription[] = [];
  properties: Property[] = [];



  constructor(private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService,
    private propertyService: PropertyService, private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.allhousesType = this.activatedRoute.snapshot.paramMap.get("category");
    this.getAllPropertyByCategory();
  }


  getAllPropertyByCategory(): void {
    /*if (!this.authenticationService.isUserLoggedIn()) {
      this.sendNotification(NotificationType.ERROR, "You need to login to continue");
      this.router.navigateByUrl("/travellerLogin");
    }*/
    const formData = new FormData();
    formData.append("propertyType", this.allhousesType);
    this.subscriptions.push(

      this.propertyService.getProperties(formData).subscribe(
        (response: Property[]) => {

          this.properties = response;
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, errorResponse.error.message);

        }
      )
    );

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
