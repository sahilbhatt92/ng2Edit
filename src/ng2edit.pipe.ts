import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'ng2EditPipe'
})
@Injectable()
export class Ng2EditPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
