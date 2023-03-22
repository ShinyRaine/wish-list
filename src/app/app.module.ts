import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishFormComponent } from './wish-form/wish-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishDetailComponent } from './wish-detail/wish-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WishFormComponent,
    WishListComponent,
    WishDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
