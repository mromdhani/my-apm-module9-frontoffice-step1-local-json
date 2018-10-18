import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe,  } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // NOTE : This in new in ANGULAR 6 !
})
export class ProductsService {
  private _productUrl = './assets/api/products/products.json';

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
      return this._http.get<IProduct[]>(this._productUrl)
         // .map((response: Response) => <IProduct[]> response.json())  // No more needed since 4.3
        // .do(data => console.log('All: ' +  JSON.stringify(data)))
        // the do operator has been renamed to tap, because do is a reserved keyword in JavaScript.
                                                       // Regarder ici https://alligator.io/angular/angular-6/
        .pipe(
          tap(data => console.log('All: ' +  JSON.stringify(data)))
        ); // .catchError(this.handleError);
  }

  private handleError(error: any) {
      console.error(error);
     // return Observable.of(error);
  }

}
