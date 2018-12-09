import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Home" [root]="tab1"></ion-tab>
      <ion-tab tabTitle="Resume" [root]="tab2"></ion-tab>
      <ion-tab tabTitle="Contact" [root]="tab3"></ion-tab>
    </ion-tabs>
`})
export class TabsPage {
  tab1 ='HomePage';
  tab2 = 'ResumePage';
  tab3 = 'ContactPage';
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}