import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
businessdata:any=[]
  constructor(private service:NewsapiservicesService){}

ngOnInit():void{
this.service.businessNews().subscribe((data:any)=>{
  this.businessdata=data.articles

  console.log( this.businessdata);
  
})
}
}
