import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: any, count: number): string {
    if (count !== 1) {
      return `${value}s`;
    } else {
      return value;
    }
  }

}
