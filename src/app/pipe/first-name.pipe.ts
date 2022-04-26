import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName'
})
export class FirstNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let tmp = values;

    var name = "Renan Rodrigues Moraes";
    name = tmp[0];

    return name;
  }

  capitalize(value: string) {

    return value.substring(0).replace(value, " ");

  }

}
