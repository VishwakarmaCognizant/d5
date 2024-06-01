import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatButtonModule} from '@angular/material/button';
import { RegistrationComponent } from './registration/registration.component';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseComponent } from './course/course.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthGaurdGuard } from './AuthGaurd/auth-gaurd.guard';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CourseStep1Component } from './CourseSteps/course-step1/course-step1.component';
import { CourseStep2Component } from './CourseSteps/course-step2/course-step2.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import {MatTreeModule} from '@angular/material/tree';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { PropertiesBindingComponent } from './properties-binding/properties-binding.component';
import { FormsModule } from '@angular/forms';
import { ConfirmPageGuard } from './AuthGaurd/confirm-page.guard';
import { ChildToParentComuncationComponent } from './child-to-parent-comuncation/child-to-parent-comuncation.component';
import { ParentToChildComponentComponent } from './parent-to-child-component/parent-to-child-component.component';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';

import { CustomPipePipe } from './pipe/custom-pipe.pipe';
import { ValidateURLGuard } from './AuthGaurd/validate-url.guard';
import { CanActivateChildValidateURLGuard } from './AuthGaurd/can-activate-child-validate-url.guard';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AboutUsComponent,
    CourseComponent,
    ContactUsComponent,
    HomeComponent,
    AddNewCourseComponent,
    CreateCoursesComponent,
    CourseStep1Component,
    CourseStep2Component,
    DragDropComponent,
    TreeDemoComponent,
    PropertiesBindingComponent,
    ChildToParentComuncationComponent,
    ParentToChildComponentComponent,
    PipesComponentComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,HttpClientModule,
    ReactiveFormsModule,MatSlideToggleModule,MatFormFieldModule,MatInputModule, MatMenuModule,MatListModule,
    MatGridListModule,MatDatepickerModule,MatCardModule,BrowserAnimationsModule,
    MatButtonModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatTabsModule,
    MatStepperModule,MatRadioModule,MatSelectModule,MatCheckboxModule,MatTooltipModule,MatTableModule,DragDropModule
,MatTreeModule,ScrollingModule
  ],
  exports:[ MatSlideToggleModule,MatFormFieldModule,MatInputModule, MatMenuModule,MatListModule,
    MatGridListModule,MatDatepickerModule,MatCardModule,BrowserAnimationsModule
  ,MatButtonModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatTabsModule,
  MatStepperModule,MatRadioModule,MatSelectModule,MatCheckboxModule,MatTooltipModule,MatTableModule,
  DragDropModule,MatTreeModule,ScrollingModule
  ],
  providers: [AuthGaurdGuard,ConfirmPageGuard,ValidateURLGuard,CanActivateChildValidateURLGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
