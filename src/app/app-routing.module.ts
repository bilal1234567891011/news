import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent}, //home
  {path:'tech',component:TechnewsComponent},//tech news
  {path:'business',component:BusinessnewsComponent},//business news
  {path:'sports',component:SportsnewsComponent},//sports news
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
