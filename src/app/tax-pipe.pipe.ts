import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxPipe'
})
export class TaxPipePipe implements PipeTransform {

  transform(num:number, tax?: number): any {
    // calculate the tax...
     var taxamt;
      if(tax){
        taxamt = num*tax/100;
      }
      else{
        if (tax == 0){
          taxamt = 0;
        }
        else {
          taxamt = num*7/100;
        }
        
      }
        
      return taxamt;
     
    // let def_tax;
    // typeof(tax) == 'num'
      
  }

}
