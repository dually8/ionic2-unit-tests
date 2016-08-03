import { beforeEach, beforeEachProviders, describe, expect, it, inject, injectAsync } from '@angular/core/testing';
import { provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { asyncCallbackFactory, injectAsyncWrapper, providers } from '../../../test/dependency-injection-handler';
import {NavMock} from '../../../test/mocks';
import { ContactProvider } from '../../providers/contact-provider/contact-provider';
import {ContactPage} from './contact';

let muhproviders = [
    provide(ContactProvider, {useClass: ContactProvider}),
    HTTP_PROVIDERS,
    provide(NavMock, {useClass: NavMock})
];

describe('Contact Page', () => {
    let page: ContactPage;

    beforeEachProviders(() => providers.concat(muhproviders));

    beforeEach(inject([ContactProvider, NavMock], (_cp, _nav) => {
        page = new ContactPage(_nav, _cp);
    }));

    it('should be defined', () => {
        expect(page).toBeDefined();
    });
});
