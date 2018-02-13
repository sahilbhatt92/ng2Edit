# ng2edit

## Installation

To install this library, run:

```bash
$ npm install ng2edit --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2edit
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { Ng2EditModule } from 'ng2edit';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    Ng2EditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ng2edit url="/exmaple" [name]="nameOfField" [value]="valueOfdataToBeUpdated" (onSuccess)="successFunction();" (onError)="errorFunction();"></ng2edit>
```

## Attributes

| Attributes | Description |
| --- | --- |
| url | url for backend service |
| name | Name of the field |
| value | value of the field to be updated |


## Events

| Attributes | Description |
| --- | --- |
| onSucess | add method for for sucess http call |
| onError | add method for for error http call |

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Contribution

Please contribute to make this plugin more useful for devs.

## License

MIT © [Sahil Bhattacharya](mailto:sahildude92@gmail.com)
