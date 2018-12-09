import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resume',
  templateUrl: 'resume.html',
})
export class ResumePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumePage');
  }

  sections = [
    {
      title: 'Profile',
      pageName: 'ProfilePage'
    },
    {
      title: 'Technical Skills',
      pageName: 'SkillsPage'
    },
    {
      title: 'Soft Skills',
      pageName: 'Skills1Page'
    },
    {
      title: 'Experience',
      pageName: 'ExperiencePage'
    },
    {
      title: 'Projects',
      pageName: 'ProjectsPage'
    }
  ]

  sectionSelected(section) {
    this.navCtrl.push(section.pageName)
  }
}
