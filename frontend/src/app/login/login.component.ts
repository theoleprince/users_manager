import {Component} from '@angular/core'
import {AuthentificationService, TokenPayload} from '../authentification.service'
import {Router} from '@angular/router'

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    credentials: TokenPayload = {
        id:0,
        name: '',
        email: '',
        password: '',
        statut: ''
    }

    constructor(private auth: AuthentificationService, private router: Router){}

    login() {
        this.auth.login(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/profile')
            },
            err => {
                console.error(err)
            }
        )
    }
}