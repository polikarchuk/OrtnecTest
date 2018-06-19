import {Component, Input, OnInit} from '@angular/core';
import {Service} from "../service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
    @Input() video;

    ngOnInit(){

    }

}
