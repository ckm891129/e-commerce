import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderItem } from './order-item';

@Injectable()
export class OrderService {

  constructor() { }

// (c i) get all order
  getAllOrder():Array<Order>{
    let orders = [
      new Order([
        new OrderItem('Black',1,2490),
        new OrderItem('Blue',2,2490),
        new OrderItem('White',1,2490),
      ], new Date("2015-02-04")),
      new Order([
        new OrderItem('Proton',1,2490),
        new OrderItem('Honda',2,2490),
        new OrderItem('Toyota',1,2490),
      ], new Date("2015-02-02")),
      new Order([
        new OrderItem('all',1,2490),
        new OrderItem('non',2,2490),
        new OrderItem('either',1,2490),
      ], new Date("2015-12-02"))

    ]
    return orders;
  }

  // (c ii) get order(id)
   getOrder(id:number){
     let all_order = this.getAllOrder();
     for (let i = 0; i < all_order.length; i++)
      if(all_order[i].id == id)
        return all_order[i]
      return null;

      // this.getAllOrder().find((item, index, obj) => {
      //   return item.id == id;
      // })
   }

  // getOrder(){
  //   // the component.ts item will move to here
  //   return new Order([
  //     new OrderItem('Samsung Note7',1,2490),
  //     new OrderItem('MacBook',1,4900),
  //     new OrderItem('Ipad Mini',2,1450)
  //   ], new Date("2015-12-04"));
  // }

}