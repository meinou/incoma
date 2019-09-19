import { MatButtonModule } from '@angular/material';
import { ResultComponent } from './../result/result.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  name = new FormControl('');
  type = new FormControl('');
  pass = false;

  constructor( private _router: Router) { }

  search() {
    this.pass = true;
    this._router.navigate(['/result'], {queryParams: {p1: this.name.value, p2: this.type.value} });
  }

}
