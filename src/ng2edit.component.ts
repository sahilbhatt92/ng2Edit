import { Input, Output, Component, EventEmitter } from '@angular/core';
import { Ng2EditService } from './ng2edit.service';
@Component({
  selector: 'ng2edit',
  templateUrl: './ng2edit.component.html',
  styleUrls: ['./ng2edit.component.css'],
  providers: [Ng2EditService]
})
export class Ng2EditComponent {
  @Input() input: string;
  @Input() name: string;
  @Input() url: string;
  @Output() onError: EventEmitter<any> = new EventEmitter();
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  showInline: boolean;
  submitted: boolean;

  constructor(private _ng2EditService: Ng2EditService) {
    this.showInline = true;
  }

  onSubmit(value: any) {
    this.submitted = true;
    this._ng2EditService.post(this.url, value).subscribe((item) => {
      this.submitted = false;
      this.input = value.name;
      this.showInline = false;
      this.onSuccess.emit(item);
    }, (error) => {
      this.submitted = false;
      this.onError.emit(error);
    });
  }

}
