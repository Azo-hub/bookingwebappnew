import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { Property } from 'src/app/model/property';
import { User } from 'src/app/model/user';
import { PropertyService } from 'src/app/service/property.service';


@Component({
  selector: 'app-findspacesthatsuityourstyle',
  templateUrl: './findspacesthatsuityourstyle.component.html',
  styleUrls: ['./findspacesthatsuityourstyle.component.css']
})
export class FindspacesthatsuityourstyleComponent implements OnInit {

  houseType1: string = "house";
  houseType2: string = "bungalows";
  houseType3: string = "cabins";
  houseType4: string = "caravans";
  houseType5: string = "condos-apartments";
  houseType6: string = "cottages";
  houseType7: string = "farm houses";
  houseType8: string = "guest houses";
  houseType9: string = "hotels";
  houseType10: string = "lodges";
  houseType11: string = "resorts";
  houseType12: string = "town houses";
  houseType13: string = "villas";

  private subscriptions: Subscription[] = [];
  properties: Property[] = [];



  constructor(private activatedRoute: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {

  }


  getAllProperty(): void {

    this.subscriptions.push(

      this.propertyService.getAllProperties().subscribe(
        (response: Property[]) => {
          this.propertyService.addAllPropertiesToLocalCache(response);

        },
        (errorResponse: HttpErrorResponse) => {
          //this.sendNotification(NotificationType.ERROR, errorResponse.error.message);

        }
      )
    );
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
