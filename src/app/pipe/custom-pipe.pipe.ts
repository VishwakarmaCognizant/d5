import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any): any {

    let currentYear=new Date().getFullYear();
    let DobcurrentYear=new Date(value).getFullYear();


        return currentYear-DobcurrentYear;
  }

}
