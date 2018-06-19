import {Http} from '@angular/http'
import { HttpClient } from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {map} from "rxjs/internal/operators";
import {Observable, of} from "rxjs/index";



@Injectable()
export class Service{
    constructor(@Inject(HttpClient) private http: HttpClient){}
    getServiseProfile(){
        return this.http.get("assets/API/data.json").pipe(
            map(response => response)


        )

    }




}
