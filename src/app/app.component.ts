import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const name: string = 'Ahmed'
const surname: string = 'Kakiyev'

console.log(name === surname)

if (name === 'Ahmed') {
  console.log('имя без ошибок')
} else {
  console.log('в имени ошибка')
}

const user = {
  name: 'Ahmed',
  surname: 'Kakiev',
  height: 185,
  weight: 95
}

console.log(user)

// const name = `Ahmed`;

// if (name === `Ahmed`) { 
   //console.log(`name is Ahmed`)
// } else {
   //console.log(`ERROR`)
// }
//  const func1 = (value: number) => console.log('value is:', value);



// const names = ['Ahmed','Adam','Muhammad']

// console.log(names[0])


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
pages = [1, 2, 3, 4, 5]
newPages = this.pages.slice().reverse();

activePage = 5;

isShowImg: boolean = true;

}