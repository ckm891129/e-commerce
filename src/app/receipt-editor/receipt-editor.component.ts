import { Component, OnInit } from '@angular/core';

// Step 1 for get the data from router
// import {} from first to show autocomplete
import { ActivatedRoute, Params } from '@angular/router'


// import the orderservices. then order info
import { OrderService } from '../order.service'
import { Order } from '../order'

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
      this.order = this.myOrderService.getOrder(params['id']);
      // log the order info from the Order
      console.log(this.order)

      this.formDate = this.order.create_time.toISOString().substring(0,10);
      console.log(this.formDate)
    })

  }

}
