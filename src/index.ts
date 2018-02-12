import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2EditComponent } from './ng2edit.component';
import { Ng2EditDirective } from './ng2edit.directive';
import { Ng2EditPipe } from './ng2edit.pipe';
import { Ng2EditService } from './ng2edit.service';

export * from './ng2edit.component';
export * from './ng2edit.directive';
export * from './ng2edit.pipe';
export * from './ng2edit.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    Ng2EditComponent,
    Ng2EditDirective,
    Ng2EditPipe
  ],
  exports: [
    Ng2EditComponent,
    Ng2EditDirective,
    Ng2EditPipe
  ]
})
export class Ng2EditModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2EditModule,
      providers: [Ng2EditService]
    };
  }
}
