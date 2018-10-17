import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {LoginPage} from "./login/login";

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        LoginPage
    ],
    entryComponents: [
        LoginPage
    ],
    providers: [],
    exports: []
})
export class AuthModule {
}