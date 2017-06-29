/** * Created by admin on 2017/6/28. */import { Http, Response } from '@angular/http';import { Injectable } from '@angular/core';import { Observable } from 'rxjs/Observable';import 'rxjs/add/operator/catch';import 'rxjs/add/operator/map';@Injectable()export class HomeService {  public url = 'http://datainfo.duapp.com/shopdata/getclass.php';  constructor( public http: Http) {}  public getClassify() {    return this.http.get(this.url).map( this.extractData).catch( this.handleError);  }  private extractData(res: Response) {    const body = res.json();    console.log('body..', body);    return body || { };  }  private handleError (error: Response | any) {    // In a real world app, you might use a remote logging infrastructure    let errMsg: string;    if (error instanceof Response) {      const body = error.json() || '';      const err = body.error || JSON.stringify(body);      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;    } else {      errMsg = error.message ? error.message : error.toString();    }    console.error(errMsg);    return Observable.throw(errMsg);  }}