import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const name: string = 'Ahmed'
const surname: string = 'Kakiyev'

console.log(name === surname)

if (name === 'Ahmed') {
  console.log('имя без ошибок')
} else {
  console.log('в имени ошибка')
}

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
  imports: [RouterModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
pages = [1, 2, 3, 4, 5]
newPages = this.Pages.slice().reverse();

activePage = 5;

isShowCatalog = true;

isShowImg: boolean = true;

catalog = ["Каталог", "Стройматериалы", "Инструменты", "Электрика", "Интерьер и одежда"];

isUpperCase = false;

toggleText() {
  this.isUpperCase = !this.isUpperCase;
}

readonly firstheader1 = `Главная`

readonly firstheader2 = `О компании`

readonly firstheader3 = `Каталог`


