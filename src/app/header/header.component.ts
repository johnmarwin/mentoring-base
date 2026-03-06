import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

isShowCatalog = true;

catalog = ["Каталог", "Стройматериалы", "Инструменты", "Электрика", "Интерьер и одежда"];

isUpperCase = false;

toggleText() {
  this.isUpperCase = !this.isUpperCase;
}

readonly firstheader1 = `Главная`

readonly firstheader2 = `О компании`

readonly firstheader3 = `Каталог`

}
