import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '../../../node_modules/@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = 'https://www.google.com';
  
  constructor(private iab: InAppBrowser, private platform: Platform) {
    platform.ready().then(() => {
      let browser = this.iab.create(this.url, '_self', {zoom: 'no', location: 'no'});
      browser.show();
    });
   };
}
