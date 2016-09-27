import { OrderItem } from "./order-item"

export class Order {
    id:number
    create_time:Date;
    items:Array<OrderItem>

    constructor(items:Array<OrderItem>, date?:Date){
        let now = new Date()
        this.id = now.getTime()
        if(!date)
            this.create_time = now
        else
            this.create_time = date;
        this.items = items
    }

    // (a) create function to getTotal
    getTotal():number{
        //  let total = 0;
        // // let orderTotal =  Array(OrderItem);
        // this.items.forEach( (value:OrderItem, index: number, arr: OrderItem[]) => {
        //     total += value.quantity * value.unit_price;
        // } )

        return 0;
    }

    // test.filter((value, index, arr) => { return value.age > 0})

}

