import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { NgFor } from '@angular/common';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-List.component.scss',
    imports: [NgFor],
})
export class UsersListComponent {
    readonly apiService = inject(HttpClient)

    users: User[] = [];

    constructor() {
        this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
            response => { 
        this.users = response;
        console.log(this.users);
                
            }
        )
    }
}