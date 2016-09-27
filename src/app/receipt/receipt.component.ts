import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';

// get the data from router
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  // @Input()
  // order
  
  order: Order

 constructor(private od:OrderService, private currentRoute: ActivatedRoute) {
    // this.order = od.getAllOrder()[0];

    // // this need to do a lot if alots
    // // and only works for the localstorage
    // // if the main of the "order.service.ts" on the constructor didint do the this.load()
    // this.od.load();
  }

  ngOnInit() {
    // get ID from router
    this.currentRoute.params.forEach( (params: Params) => {
        console.log(params['id']);
        this.order = this.od.getOrder(params['id']);
    })
  }
}
