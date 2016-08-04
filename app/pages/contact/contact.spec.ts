import { beforeEach, beforeEachProviders, describe, expect, it, inject, injectAsync } from '@angular/core/testing';
import { provide } from '@angular/core';
import { NavController } from 'ionic-angular';
import { providers } from '../../../test/common-providers';
import { ContactProvider } from '../../providers/contact-provider/contact-provider';
import {ContactPage} from './contact';

let specProviders = [
    provide(ContactProvider, {useClass: ContactProvider}),
];

describe('Contact Page', () => {
    let page: ContactPage;

    beforeEachProviders(() => providers.concat(specProviders));

    beforeEach(inject([ContactProvider, NavController], (_cp, _nav) => {
        page = new ContactPage(_nav, _cp);
    }));

    it('should be defined', () => {
        expect(page).toBeDefined();
    });
});
