import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export interface IContact {
    name: string;
    email: string;
}

@Injectable()
export class ContactProvider {
  contacts: IContact[];

  constructor(private http: Http) {
    this.contacts = [
        {
            name: 'Mr. F',
            email: 'fake@email.com'
        },
        {
            name: 'Snorlax',
            email: 'zzz@pokemanz.com'
        }
    ];
  }

  getContacts(): Promise<IContact[] | any> {
    if (this.contacts) {
      // already loaded data
      return Promise.resolve(this.contacts);
    }

    return Promise.reject('Nothing here');

    // don't have the data yet
    // return new Promise(resolve => {
    //   // We're using Angular Http provider to request the data,
    //   // then on the response it'll map the JSON data to a parsed JS object.
    //   // Next we process the data and resolve the promise with the new data.
    //   this.http.get('path/to/data.json')
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       // we've got back the raw data, now generate the core schedule data
    //       // and save the data for later reference
    //       this.contacts = data;
    //       resolve(this.contacts);
    //     });
    // });
  }
}

