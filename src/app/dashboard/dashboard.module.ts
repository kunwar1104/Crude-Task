import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashbordLayoutComponent } from '../layout/dashbord-layout/dashbord-layout.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MyPortalModule } from './my-portal/my-portal.module';
import { ProgramsComponent } from './programs/programs.component';
import { TrainersComponent } from './trainers/trainers.component';
import { JobsComponent } from './jobs/jobs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    DashbordLayoutComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProgramsComponent,
    TrainersComponent,
    JobsComponent,
    BlogsComponent,
   
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MyPortalModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot()
    
  
    
   
  ],
  exports: [
    DashboardComponent,
    DashbordLayoutComponent
  ]
})
export class DashboardModule { }
