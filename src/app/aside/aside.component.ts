import { Component, OnInit, Input, Inject } from '@angular/core';

import {Service} from "../service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {


    listAccount = [

    ];
    constructor (private Profile: Service){

    }

    ngOnInit(){
        this.Profile.getServiseProfile().subscribe((listAccount:any) =>{
            this.listAccount = listAccount;

        });
    }

}
