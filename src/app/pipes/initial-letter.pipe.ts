import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialLetter'
})
export class InitialLetterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    value = value.charAt(0).toUpperCase();
    return value;
  }

}