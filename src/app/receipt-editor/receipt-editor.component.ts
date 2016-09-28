import { Component, OnInit } from '@angular/core';

// Step 1 for get the data from router
// import {} from first to show autocomplete
import { ActivatedRoute, Params } from '@angular/router'


// import the orderservices. then order info
import { OrderService } from '../order.service'
import { Order } from '../order'
import { OrderItem } from '../order-item'

@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {

  // will run first when create instance ---> 1
  // step 2 inject ActivatedRoute in Component constructor as route
  constructor(private route:ActivatedRoute, private myOrderService:OrderService) { }

  // create formDate as string
  private formDate:string;
  private order:Order;

  // will run when create component ---> 2
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      // information we need is the id
      console.log(params['id']);
      console.log(this.order)
      console.log(this.formDate)
      this.order = this.myOrderService.getOrder(params['id']);
      this.formDate = this.order.create_time.toISOString().substring(0,10);
      // log the order info from the Order
    })

  }

  addItem(){
    this.order.items.push(new OrderItem("",1,0))

  }

  deleteItem(index:number){
    this.order.items.splice(index, 1)
  }

  validate():boolean{
    let result = true;
    if (this.formDate == "")
      return false
    if (this.order.items.length <= 0)
      return false
    this.order.items.forEach( orderItem => {
      if (orderItem.item =='')
        result = false
    })

    return result
  }

  save():boolean{
    if (!this.validate())
      return false

    // we need to change formDate back ~to create_time
    this.order.create_time = new Date(this.formDate)

    // we need to save our order to the localStorage db by using orderSerice(myOrderService)
    this.myOrderService.updateOrder(this.order);
    return true
  }

  onSave(){
    if(!this.save())
      alert("wrong information")
    else{
      console.log("SAVED")
      // or we navigate back to home
    }
  }

}
