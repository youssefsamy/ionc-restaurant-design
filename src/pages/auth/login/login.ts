import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    label_username = 'Телефон или email';
    label_password = 'Пароль';
    label_remember = 'Запомнить меня';
    label_forgetPw = 'Забыли пароль?';
    header_title = 'Вход';
    label_login_btn = 'Войти';
    social_login_title = 'или войти через';

    constructor(public navCtrl: NavController) {

    }

    back() {
        this.navCtrl.pop();
    }

}