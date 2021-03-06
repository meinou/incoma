import { MatCardModule, MatButtonModule, MatToolbarModule, MatAutocompleteModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'result', component: ResultComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
