import {Component} from '@angular/core'
import {AuthentificationService, TokenPayload} from '../authentification.service'
import {Router} from '@angular/router'

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    credentials: TokenPayload = {
        id:0,
        name: '',
        email: '',
        password: '',
        statut: ''
    }

    constructor(private auth: AuthentificationService, private router: Router){}

    register() {
        this.auth.register(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/login')
            },
            err => {
                console.error(err)
            }
        )
    }
}