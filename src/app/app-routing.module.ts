import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGaurdGuard } from './AuthGaurd/auth-gaurd.guard';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { PropertiesBindingComponent } from './properties-binding/properties-binding.component';
import { ConfirmPageGuard } from './AuthGaurd/confirm-page.guard';
import { ChildToParentComuncationComponent } from './child-to-parent-comuncation/child-to-parent-comuncation.component';
import { ParentToChildComponentComponent } from './parent-to-child-component/parent-to-child-component.component';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';
import { ValidateURLGuard } from './AuthGaurd/validate-url.guard';
import { CanActivateChildValidateURLGuard } from './AuthGaurd/can-activate-child-validate-url.guard';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'Login',component:LoginComponent,canActivate:[AuthGaurdGuard]
  },
  {
    path:'Registration',component:RegistrationComponent,canDeactivate:[ConfirmPageGuard]
  },
  {
    path:'about-us',component:AboutUsComponent,canActivate:[ValidateURLGuard]
  },
  {
    path:'contact-us',component:ContactUsComponent,
    canActivate:[ValidateURLGuard],
    canActivateChild:[CanActivateChildValidateURLGuard],
    children:[
      {path:'about-us',component:AboutUsComponent},
      {path:'about-us-1',component:AboutUsComponent}

    ]
  },
  {

    path:'ChildComponent',component:ChildToParentComuncationComponent,
    
    children:[
      {path:'feedback',outlet:'feedback',component:AboutUsComponent},
      {path:'map',outlet:'map',component:AboutUsComponent}
    ]
  },
  {
    path:'ParentComponent',component:ParentToChildComponentComponent
  },
  {
    path:'courses/:id',component:AddNewCourseComponent
  },
  {
    path:'course',component:CourseComponent
  },
  {
    path:'CreateNewCourses',component:CreateCoursesComponent
  },
  {
    path:'drag-drop',component:DragDropComponent
  },
  {
    path:'tree-demo',component:TreeDemoComponent
  },
  {
    path:'PropertiesBinding',component:PropertiesBindingComponent
  },
{path:'PipesComponent',component:PipesComponentComponent}
,

  {
    path:'User',
    loadChildren:()=>import('../app/user/user.module').then(m=>m.userAppModule)
  },
  {
    path:'Admin',
    loadChildren:()=>import('../app/admin/admin.module').then(m=>m.AdminModule)
    // loadChildren:()=>import('../app/admin/admin.module').then(m=>m.AdminModule),

  
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
