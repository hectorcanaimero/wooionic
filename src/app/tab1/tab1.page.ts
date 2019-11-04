import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }


}
