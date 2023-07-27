import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { MetadataService } from './service/metadata.service';
import { SharethisAngularModule } from 'sharethis-angular';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    SharethisAngularModule
  ],

  providers: [MetadataService],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
