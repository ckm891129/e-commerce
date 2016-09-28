import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderItem } from './order-item';

const ORDERS = [
   new Order([
        new OrderItem('Black',1,100),
        new OrderItem('Blue',2,200),
        new OrderItem('White',1,300),
      ], new Date("2015-02-04")),
      new Order([
        new OrderItem('Proton',1,222),
        new OrderItem('Honda',2,444),
        new OrderItem('Toyota',1,666),
      ], new Date("2015-02-02")),
      new Order([
        new OrderItem('all',1,999),
        new OrderItem('non',2,678),
        new OrderItem('either',1,907),
      ], new Date("2015-12-02"))
]

const LOCAL_KEY:string = "order_key"

@Injectable()
export class OrderService {

  constructor() {
    // make everytime we call this service load all the data to _orders
    this.load();
   }
  private _orders: Array<Order>;

  // save data to localstorage 
  save() {
    localStorage[LOCAL_KEY] = JSON.stringify(this._orders);
  }
  // load data from local storage
  // if there's notdata give it initial data
  load(): Array<Order>{
    let string_data = localStorage[LOCAL_KEY];
    let order_array;
    if (typeof string_data == 'undefined')
    {
      // save data in localstorage
      order_array = ORDERS;
      this._orders = this.loadData(order_array);
      this.save()
    }
    else {
      // when we found data
      order_array = JSON.parse(string_data);
      // we need to use loadData because without this we cannot to the getTotal of the data...
      // to make the JSON become an array of orders
      this._orders = this.loadData(order_array);
    }

    return  this._orders;
  }

// (c i) get all order
  getAllOrder():Array<Order>{
    // let orders = [
    //   new Order([
    //     new OrderItem('Black',1,100),
    //     new OrderItem('Blue',2,200),
    //     new OrderItem('White',1,300),
    //   ], new Date("2015-02-04")),
    //   new Order([
    //     new OrderItem('Proton',1,222),
    //     new OrderItem('Honda',2,444),
    //     new OrderItem('Toyota',1,666),
    //   ], new Date("2015-02-02")),
    //   new Order([
    //     new OrderItem('all',1,999),
    //     new OrderItem('non',2,678),
    //     new OrderItem('either',1,907),
    //   ], new Date("2015-12-02"))

    // ]
    // return orders;
    return ORDERS;
  }

  // (c ii) get order(id)
   getOrder(id:string){
    //  let all_order = this.getAllOrder();
    //  for (let i = 0; i < all_order.length; i++)
    //   if(all_order[i].id == id)
    //     return all_order[i]
    //   return null;
    console.log("find" + id);
    return this.getAllOrder().find(item => {
       return item.id == id;
    })

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

  loadData(orders_json_array:Array<any>){
    let orders: Array<Order> = [];
    orders_json_array.forEach((orderItem, index, arr) => {
      let items: Array<OrderItem> =[]
      orderItem.items.forEach((item, item_index, item_arr) => {
        items.push(new OrderItem(item.item, item.quantity, item.unit_price))
      })
      let order = new Order(items, new Date(orderItem.create_time))
      order.id = orderItem.id;
      orders.push(order);
    })
    return orders;

  }

  // update order and save to our db
  updateOrder(order:Order){
    // find index of order in _ordrs.
    // if TS is 2.x.x
    let index = this._orders.findIndex( item => {
      return item.id == order.id
    })

    // // if < 2.x.x of TS
    // let index = -1;
    // for (let i = 0; this._orders.length; i++)
    // if (this._orders[i].id == order.id){
    //   index = i
    //   break
    // }

    // replace _order[index] with order
    this._orders[index] = order;

    // save
    this.save();



  }

}
