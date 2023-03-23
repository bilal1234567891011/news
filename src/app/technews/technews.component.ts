import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  techdata:any=[]
  constructor(private service:NewsapiservicesService){}
ngOnInit(): void{
this.service.techNews().subscribe((data:any)=>{
this.techdata=data.articles
console.log(this.techdata);

})
}
}
