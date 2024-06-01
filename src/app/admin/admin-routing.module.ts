import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent
  },
  {
    path:'Admin',
    component:AdminComponent
  },
  {
    path:'Manage-User',
    component:ManageUsersComponent
  },
  {
    path:'AddAuthor',
    component:AddAuthorComponent
  },
  {
    path:'AddPublisher',
    component:AddPublisherComponent
  },
  {
    path:'AddBookDetails',
    component:AddBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
