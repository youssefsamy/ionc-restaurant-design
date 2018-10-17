import { NgModule, ModuleWithProviders } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {IonicModule} from "ionic-angular";

// https://angular.io/styleguide#!#04-10
@NgModule({
    imports: [
        IonicModule,
        FormsModule,
    ],
    providers: [
    ],
    declarations: [

    ],
    entryComponents: [
    ],
    exports: [

    ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}