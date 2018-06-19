import { Component } from '@angular/core';

import {Service} from "./service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    video;
    newProfilesClas = "";


    constructor (private Profile: Service){

    }

    ngOnInit(){
        this.Profile.getServiseProfile().subscribe((listAccount:any) =>{
           this.selectVideo(listAccount.videos[0]);

        });
    }
    selectVideo(video){
      this.video=video;
    }

}
