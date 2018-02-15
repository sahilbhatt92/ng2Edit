# ng2edit
[![npm version](https://badge.fury.io/js/ng2edit.svg)](https://badge.fury.io/js/ng2edit)
[![npm](https://david-dm.org/sahilbhatt92/ng2Edit/status.svg)](https://www.npmjs.com/package/ng2edit)
[![npm](https://img.shields.io/npm/dm/ng2edit.svg)](https://www.npmjs.com/package/ng2edit)
<br/><br/>
An Angular library for inline editing/updating of text. For Example, you can edit some data and display on the go.

## Installation

To install this library, run:

```bash
$ npm install ng2edit --save
```

## Consuming your library

Once you have installed your library, you can import your library in any Angular application. As shown in example below:

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
<ng2edit url="/exmaple" name="nameOfField" value="valueOfdataToBeUpdated" (onSuccess)="successFunction($event);" (onError)="errorFunction($event);"></ng2edit>
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

## Customize

Although `ng2Edit` comes with `bootstrap` styles which makes it feel like existing bootstrap component. But if you want it to see on your own way, you can use our pre-defined classes.

| Classes | Description |
| --- | --- |
| `ng2edit-input` | class of the input-box |
| `ng2edit-btn` | class of the button with &crarr; inside of it |
| `ng2edit-btn-save` | class of the save button |
| `ng2edit-btn-cancel` | class of the cancel button |

**Note: For now there are no icons used we will update soon. But we have managed to add &crarr; HTML Entity. Don't worry use can use your own.**

## Posting data to server

The data will be posted in JSON. Please take a look at example below.

```JSON
{ "nameOfField": "valueofField" }
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```
## Issues

If library is not able to run on your local machine please raise an issue.

## Contribution

If you want to enhance the plugin or to fix any major bug, pull request are most welcome.

## License

MIT © [Sahil Bhattacharya](mailto:sahildude92@gmail.com)
