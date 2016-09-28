// first import two 
// https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
// http://plnkr.co/edit/?p=preview
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import component that going to use for each page
import { ReceiptComponent  } from './receipt/receipt.component';
import { ReceiptSelectorComponent  } from './receipt-selector/receipt-selector.component';
import { AboutComponent } from './about/about.component';

// day 3 - add receiptEditor item -1
import { ReceiptEditorComponent } from './receipt-editor/receipt-editor.component'

// create appRoute constant
const appRoute:Routes = [
    {
        path: '',
        redirectTo:'/home',
        // redirect to /home no matter where this router is
        pathMatch:'full'
    },
    {
        path: 'home',
        component: ReceiptSelectorComponent
    },
      /*
    {
        path: 'receipt',
        component: ReceiptComponent
    }*/
    {
        path: 'receipt/:id',
        component: ReceiptComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        // day 3 add path item 2
        path: 'editor/:id', // change from editor
        component: ReceiptEditorComponent
    }
  
]

// export the routing to module
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute)