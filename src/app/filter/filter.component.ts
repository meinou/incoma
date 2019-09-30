import { MatButtonModule } from '@angular/material';
import { ResultComponent } from './../result/result.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, filter, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  name = new FormControl('');
  type = new FormControl('');
  pass = false;
  name_holder: string;
  type_holder: string;

  constructor( private _router: Router,
               private route: ActivatedRoute) {
                this.route.queryParams.subscribe(params => {
                  this.name_holder = params.p1 ? params.p1 : '';
                  this.type_holder = params.p2 ? params.p2 : '';
                });
               }

  search() {
    this.pass = true;
    this._router.navigate(['/result'], {queryParams: {p1: this.name.value, p2: this.type.value} });
  }

}
