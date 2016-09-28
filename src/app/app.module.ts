import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TotalPipePipe } from './total-pipe.pipe';
import { TaxPipePipe } from './tax-pipe.pipe';

// (1) import the serviceOrder
import  { OrderService } from './order.service';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptSelectorComponent } from './receipt-selector/receipt-selector.component'
import { ReceiptEditorComponent } from './receipt-editor/receipt-editor.component'

// import routing here
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    TotalPipePipe,
    TaxPipePipe,
    ReceiptComponent,
    ReceiptSelectorComponent,
    AboutComponent,
    ReceiptEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // import the routing here
    routing
  ],
  providers: [
    // (2) provide the provider
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
