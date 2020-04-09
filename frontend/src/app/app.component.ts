import { Component } from '@angular/core'
import {AuthentificationService} from './authentification.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(public auth: AuthentificationService) {}
}




