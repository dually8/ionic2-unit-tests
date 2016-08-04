import { provide, Type }                              from '@angular/core';
import { injectAsync }                                from '@angular/core/testing';
import { Control }                                    from '@angular/common';
import { HTTP_PROVIDERS }                             from '@angular/http';
import { App, Config, Form, NavController, Platform } from 'ionic-angular';
import { ConfigMock, NavMock }                        from './mocks';

export let providers: Array<any> = [
    Form,
    provide(Config, { useClass: ConfigMock }),
    provide(App, { useClass: ConfigMock }),
    provide(NavController, { useClass: NavMock }),
    provide(Platform, { useClass: ConfigMock }),
    HTTP_PROVIDERS,
];
