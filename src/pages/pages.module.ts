import {NgModule} from "@angular/core";
import {WelcomePage} from "./welcome/welcome";
import {IonicModule} from "ionic-angular";
import {AuthModule} from "./auth/auth.module";
import {SharedModule} from "../shared/shared.module";

/**
 * Created by Tall Prince on 2/6/2017.
 */
@NgModule({
    imports: [
        IonicModule,
        AuthModule,
        SharedModule
    ],
    declarations: [
        WelcomePage,
    ],
    entryComponents: [
        WelcomePage
    ],
    providers: [],
    exports: []
})
export class PagesModule {
}