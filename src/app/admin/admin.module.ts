import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminComponent } from './admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerProgressComponent } from './spinner-progress/spinner-progress.component';
import {MatSortModule} from '@angular/material/sort';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import {MatBadgeModule} from '@angular/material/badge';
import { EditPublisherComponent } from './edit-publisher/edit-publisher.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserListComponent } from './user-list/user-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AdminComponent,
    AddHotelsComponent,
    ManageUsersComponent,
    LayoutComponent,
    AddPublisherComponent,
    AddAuthorComponent,
    AddBookComponent,
    SpinnerProgressComponent,
    EditUserComponent,
    EditAuthorComponent,
    EditPublisherComponent,
    UserListComponent,
  ],
  entryComponents:[EditUserComponent,EditAuthorComponent,EditPublisherComponent]
  ,
  imports: [
    CommonModule,
    AdminRoutingModule,    
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,MatInputModule,
    MatSlideToggleModule,MatMenuModule,MatListModule,
    MatGridListModule,MatDatepickerModule,MatCardModule,
    MatButtonModule,MatNativeDateModule,MatTableModule,MatPaginatorModule,MatExpansionModule,MatIconModule,
    MatDialogModule,MatSelectModule,MatProgressSpinnerModule,MatSortModule,MatBadgeModule,MatSidenavModule,MatCheckboxModule
  ],
  exports:[ MatToolbarModule,MatFormFieldModule,MatInputModule,MatSlideToggleModule,MatMenuModule,MatListModule,
    MatGridListModule,MatDatepickerModule,MatCardModule,MatButtonModule,MatNativeDateModule,MatTableModule
  ,MatPaginatorModule,MatExpansionModule,MatIconModule,
  MatDialogModule,MatSelectModule,MatProgressSpinnerModule,MatSortModule,MatBadgeModule,MatSidenavModule
  ,MatCheckboxModule
]
})
export class AdminModule { 
constructor(){
  
}
  
}
