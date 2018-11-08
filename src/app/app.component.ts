import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html'
})
// Adding all the necessary pages Workouts and Progress below
export class AppComponent {
 public appPages = [
   {
     title: 'Home',
     url: '/home',
     icon: 'home'
   },
   {
     title: 'Progress',
     url: '/progress',
     icon: 'list'
   },
   {
     title: 'Workouts',
     url: '/workouts',
     icon: 'list'
   }
 ];

 constructor(
   private platform: Platform,
   private splashScreen: SplashScreen,
   private statusBar: StatusBar
 ) {
   this.initializeApp();
 }

 initializeApp() {
   this.platform.ready().then(() => {
     this.statusBar.styleDefault();
     this.splashScreen.hide();
   });
 }
}
