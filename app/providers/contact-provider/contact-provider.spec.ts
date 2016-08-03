import { beforeEach, beforeEachProviders, describe, expect, it, inject, injectAsync } from '@angular/core/testing';
import {HTTP_PROVIDERS} from '@angular/http';
import { ContactProvider } from './contact-provider';

describe('Contact Provider', () => {
    let _cp: ContactProvider;
    beforeEachProviders(() => [
        HTTP_PROVIDERS,
        ContactProvider
    ]);

    beforeEach(inject([ContactProvider], cp => {
        _cp = cp;
    }));

    it('should have something', () => {
        expect(_cp).toBeDefined();
    });

    it('should have getContacts function', () => {
        expect(_cp.getContacts).toBeDefined();
    });

    it('should return CJ', done => {
        _cp.getContacts()
            .then((res) => {
                expect(res[0].name).toBe('CJ');
                done();
            }).catch((err) => {
                console.error('OH NO!');
                console.error(err);
                done();
            });
    });
});
