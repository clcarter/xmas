import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { IconRegistry } from './ui/icon.service';

const iconRegistrar = (iconService: IconRegistry) => () => iconService.register()
@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: iconRegistrar,
    deps: [IconRegistry],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
