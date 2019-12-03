import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { GiftService } from './gift.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TreeComponent } from './tree/tree.component';
import { SnowService } from './snow.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreeComponent,
    SnowService
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    FlexLayoutModule
    // AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [GiftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
