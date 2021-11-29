import { HttpClientModule } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { ServiceWorkerModule } from '@angular/service-worker'

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TreeComponent } from './tree/tree.component'
import { IconRegistry } from './ui/icon.service'
import { TitleDirective } from './title.directive'
import { SnowService } from './snow.service'

const iconRegistrar = (iconService: IconRegistry) => () =>
  iconService.register()
// const snowMaker = (snowService: SnowService) => () =>
//   snowService.init({
//     baseSize: 40,
//     maxFlakeXSections: 6,
//     minFlakeXSections: 2,
//     maxFlakes: 500,
//     color: [255, 255, 255],
//     zRange: [-50, 30],
//     windowHeight: 1080,
//     windowWidth: 2400,
//   })

@NgModule({
  declarations: [AppComponent, TreeComponent, TitleDirective],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: "registerImmediately",
    }),
    RouterModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: iconRegistrar,
      deps: [IconRegistry],
      multi: true,
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: snowMaker,
    //   deps: [SnowService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
