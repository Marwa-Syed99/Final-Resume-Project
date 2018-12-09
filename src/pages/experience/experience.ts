import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html',
})
export class ExperiencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperiencePage');
  }
// Slides for the experience page with images 
  slides = [
    {
      title: "Reski OY",
      description: "2016-2017 <br> <b>Front End Developer</b> <br> Reski is a startup that deals with embedded software and technology. Responsibilities include designing the look of the website. Introducing new features and resolve minor issues. As well as aid with the design of some graphics.",
      image: "../../assets/imgs/reski.png",
    },
    {
      title: "Ubisoft Redlynx",
      description: "Currently working <br> <b>Quality Control</b> <br> Ubisoft Redlynx is a game company based in Helsinki. Responsibilities include bug logging, detecting issues with the game, quality assurance and game testing.",
      image: "../../assets/imgs/redlynx.png",
    },
  ];
}
