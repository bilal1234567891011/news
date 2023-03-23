import { Component,OnInit} from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {
  sportsdata:any=[]
constructor(private service:NewsapiservicesService){}
 ngOnInit():void{
this.service.sportsNews().subscribe((data:any)=>{
  this.sportsdata=data.articles

  console.log(this.sportsdata);
})
 }
}
