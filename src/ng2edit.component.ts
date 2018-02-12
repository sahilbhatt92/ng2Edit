import { Input, Component } from '@angular/core';
@Component({
  selector: 'ng2edit-component',
  templateUrl: './ng2edit.component.html',
  styleUrls: ['./ng2edit.component.css']
})
export class Ng2EditComponent {
  @Input() input: string;
  @Input() name: string;
  @Input() card: any;
  @Input() order: any;
  showInline: boolean;
  submitted: boolean;

  constructor() {
    this.showInline = false;
  }

}
