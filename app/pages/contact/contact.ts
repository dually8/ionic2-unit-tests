import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactProvider, IContact} from '../../providers/contact-provider/contact-provider';

@Component({
    templateUrl: 'build/pages/contact/contact.html',
    providers: [ContactProvider]
})
export class ContactPage {

    contacts: IContact[];

    constructor(
        private navCtrl: NavController,
        private _contactProvider: ContactProvider
    ) {
        this._contactProvider.getContacts()
            .then((res) => {
                this.contacts = res;
            });
    }
}
