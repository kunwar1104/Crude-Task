import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule} from 'ngx-bootstrap/alert'
import { SharedModule } from './shared/shared.module';
import { Subscription } from 'rxjs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DemoComponent } from './prectice/demo/demo.component';
import { ChildComponent } from './prectice/child/child.component';
import { MaterixComponent } from './prectice/materix/materix.component';
import { QuizComponent } from './prectice/quiz/quiz.component';
import { StarPatternComponent } from './prectice/star-pattern/star-pattern.component';
import { ParentChildComponent } from './prectice/parent-child/parent-child.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        ChildComponent,
        MaterixComponent,
        QuizComponent,
        StarPatternComponent,
        // ParentChildComponent
    ],
    providers: [
        // appConfig.providers
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AlertModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
        BsDropdownModule.forRoot()
    ],
    
})
export class AppModule { }
