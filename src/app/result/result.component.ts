import { FormControl } from '@angular/forms';
import { Component, OnInit, Input} from '@angular/core';
import { ItemModel } from '../item';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  items: ItemModel[];
  name: string;
  type: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.name = params.p1;
      this.type = params.p2;
      this.dataService.getItems()
      .subscribe(items =>
        this.items = items.filter( item =>
          item.name.includes(this.name) && item.type.includes(this.type)));
    });
  }
}
