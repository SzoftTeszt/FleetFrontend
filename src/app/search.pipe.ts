import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(drivers:any, szo:string): any {
    if (!drivers) return null;

    if (!szo) return drivers;

    return drivers.filter(
      (adat:any)=> adat.name.toLowerCase().includes(szo.toLowerCase())
    )

  }

}
