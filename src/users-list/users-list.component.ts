import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-List.component.scss',
})
export class UsersListComponent {
    readonly apiService = inject(HttpClient)

    constructor() {
        this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
            response => {
                
            }
        )
    }
}