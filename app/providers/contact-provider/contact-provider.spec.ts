import { beforeEach, beforeEachProviders, describe, expect, it, inject, injectAsync } from '@angular/core/testing';
import {HTTP_PROVIDERS} from '@angular/http';
import { providers } from '../../../test/common-providers';
import { ContactProvider } from './contact-provider';

let specProviders = [
    ContactProvider
];

describe('Contact Provider', () => {
    let _cp: ContactProvider;
    beforeEachProviders(() => providers.concat(specProviders));

    beforeEach(inject([ContactProvider], cp => {
        _cp = cp;
    }));

    it('should have something', () => {
        expect(_cp).toBeDefined();
    });

    it('should have getContacts function', () => {
        expect(_cp.getContacts).toBeDefined();
    });

    it('should return Mr. F', done => {
        _cp.getContacts()
            .then((res) => {
                expect(res[0].name).toBe('Mr. F');
                done();
            }).catch((err) => {
                console.error('OH NO!');
                console.error(err);
                done();
            });
    });
});
