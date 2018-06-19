import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Service} from "../service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    listCategoryes = [


];
    @Output() videoSelected = new EventEmitter();

    constructor(private Model: Service) { }

    ngOnInit(){
        this.Model.getServiseProfile().subscribe((listCategoryes:any) =>{
            this.listCategoryes = listCategoryes;
        });
    }

}
