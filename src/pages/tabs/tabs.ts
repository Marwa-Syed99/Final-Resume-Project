import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { SonglistPage } from '../songlist/songlist';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Home" [root]="tab1"></ion-tab>
      <ion-tab tabTitle="About" [root]="tab2"></ion-tab>
      <ion-tab tabTitle="Song List" [root]="tab3"></ion-tab>
    </ion-tabs>
`})
export class TabsPage {
  tab1 ='HomePage';
  tab2 = 'AboutPage';
  tab3 = 'SonglistPage';
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}