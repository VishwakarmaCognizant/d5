import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderListComponent } from './order-list/order-list.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { MatSelectModule } from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    OrderItemsComponent,
    OrderListComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,    
    UserRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,MatInputModule,
    MatSlideToggleModule,MatMenuModule,MatListModule,
    MatGridListModule,MatDatepickerModule,MatCardModule,
    MatButtonModule,MatNativeDateModule,MatTableModule,MatPaginatorModule,MatExpansionModule,MatIconModule,
    MatDialogModule,MatSelectModule,MatSidenavModule
  ],
  exports:[MatToolbarModule,
    MatFormFieldModule,MatInputModule,
    MatSlideToggleModule,MatMenuModule,MatListModule,
    MatGridListModule,MatDatepickerModule,MatCardModule,
    MatButtonModule,MatNativeDateModule,MatTableModule,MatPaginatorModule,MatExpansionModule,MatIconModule,
    MatDialogModule,MatSelectModule,MatSidenavModule]
})
export class userAppModule { }
