import { MatButtonModule } from '@angular/material';
import { ResultComponent } from './../result/result.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, filter, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  name = new FormControl('');
  type = new FormControl('');
  pass = false;
  navigationEnd: Observable<NavigationEnd>;
  routePathParam: Observable<string>;
  subRoutePathParam: Observable<string>;

  constructor( private _router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.navigationEnd = this._router.events.pipe(filter((event: Event) => event instanceof NavigationEnd));

    this.routePathParam = this.navigationEnd
    .pipe(
      map(() => this.route.root.firstChild),
      switchMap(firstChild => firstChild
        ? firstChild.paramMap.pipe(map(paramMap => paramMap.get('routePathParam')))
        : of(null
        )),
    );

    this.subRoutePathParam = this.navigationEnd
      .pipe(
        map(() => this.route.root.firstChild),
        switchMap(firstChild => firstChild && firstChild.firstChild
          ? firstChild.firstChild.paramMap
            .pipe(map(paramMap => paramMap.get('subRoutePathParam')))
          : of(null)
        )
      );
  }

  search() {
    this.pass = true;
    this._router.navigate(['/result'], {queryParams: {p1: this.name.value, p2: this.type.value} });
  }

}
