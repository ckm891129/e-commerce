import { Component } from '@angular/core';

import { Order } from './order';
import { OrderItem } from './order-item';

// import here as well (3)
import  { OrderService } from './order.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  order:Order
  
  constructor(orderService:OrderService){
    // this.order = new Order([
    //   new OrderItem('Samsung Note7',1,2490),
    //   new OrderItem('MacBook',1,4900),
    //   new OrderItem('Ipad Mini',2,1450)
    // ], new Date("2015-12-04"));
    // change the this.order to call in the services (4)
    // this.order = orderService.getOrder();
    
    // get the first array first
    this.order = orderService.getAllOrder()[0];
  }
}
