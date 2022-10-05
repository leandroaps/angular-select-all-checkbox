import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'How to select/unselect all checkbox';
  MASTER_SELECTED: boolean;
  CHECKLIST: any;
  CHECKED_LIST: any;

  constructor() {
    this.MASTER_SELECTED = false;
    this.CHECKLIST = [
      { id: 1, value: 'Elenor Anderson', IS_SELECTED: false },
      { id: 2, value: 'Caden Kunze', IS_SELECTED: true },
      { id: 3, value: 'Ms. Hortense Zulauf', IS_SELECTED: true },
      { id: 4, value: 'Grady Reichert', IS_SELECTED: false },
      { id: 5, value: 'Dejon Olson', IS_SELECTED: false },
      { id: 6, value: 'Jamir Pfannerstill', IS_SELECTED: false },
      { id: 7, value: 'Aracely Renner DVM', IS_SELECTED: false },
      { id: 8, value: 'Genoveva Luettgen', IS_SELECTED: false },
    ];
    this.getCheckedItemList();
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (const element of this.CHECKLIST) {
      element.IS_SELECTED = this.MASTER_SELECTED;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.MASTER_SELECTED = this.CHECKLIST.every(function (item: any) {
      return item.IS_SELECTED;
    });
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList() {
    this.CHECKED_LIST = [];
    for (const element of this.CHECKLIST) {
      if (element.IS_SELECTED) this.CHECKED_LIST.push(element);
    }
    this.CHECKED_LIST = JSON.stringify(this.CHECKED_LIST);
  }
}
