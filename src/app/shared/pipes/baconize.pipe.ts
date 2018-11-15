import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baconize'
})
export class BaconizePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return null;
    }

    const regex = /Chuck Norris|Chuck|Norris/;
    return value.replace(regex, 'Bacon');
  }
}
