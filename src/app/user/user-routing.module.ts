import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',component:UserComponent
  },
  {
    path:'User',component:UserComponent
  },
  
  {path:'Home',component:HomeComponent
  },
  {
    path:'OrderList',component:OrderListComponent
  },
  {
    path:'OrderItems',component:OrderItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
