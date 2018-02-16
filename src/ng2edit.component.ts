import { Input, Output, Component, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ng2edit',
  templateUrl: './ng2edit.component.html',
  styleUrls: ['./ng2edit.component.css']
})
export class Ng2EditComponent {
  @Input() value: string;
  @Input() name: string;
  @Input() url: string;
  @Output() onError: EventEmitter<any> = new EventEmitter();
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  showInline: boolean;
  submitted: boolean;

  constructor(private _http: Http) {
    this.showInline = true;
  }

  onSubmit(data: any) {
    this.submitted = true;
    this.post(this.url, data).subscribe((item) => {
      this.submitted = false;
      this.value = data.name;
      this.showInline = false;
      this.onSuccess.emit(item);
    }, (error) => {
      this.submitted = false;
      this.onError.emit(error);
    });
  }

  post(url: string, data: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(url, data, options)
                .map(this.extractData)
                .catch(this.handleError);
}

private extractData(res: Response) {
  const body = res.json();
  return body || { };
}
private handleError (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  return Promise.reject(errMsg);
}


}
