import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'How to select/unselect all checkbox';
  masterSelected: boolean;
  CHECKLIST: any;
  CHECKED_LIST: any;

  constructor() {
    this.masterSelected = false;
    this.CHECKLIST = [
      { id: 1, value: 'Elenor Anderson', isSelected: false },
      { id: 2, value: 'Caden Kunze', isSelected: true },
      { id: 3, value: 'Ms. Hortense Zulauf', isSelected: true },
      { id: 4, value: 'Grady Reichert', isSelected: false },
      { id: 5, value: 'Dejon Olson', isSelected: false },
      { id: 6, value: 'Jamir Pfannerstill', isSelected: false },
      { id: 7, value: 'Aracely Renner DVM', isSelected: false },
      { id: 8, value: 'Genoveva Luettgen', isSelected: false },
    ];
    this.getCheckedItemList();
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (const element of this.CHECKLIST) {
      element.isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.CHECKLIST.every(function (item: any) {
      return item.isSelected;
    });
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList() {
    this.CHECKED_LIST = [];
    for (const element of this.CHECKLIST) {
      if (element.isSelected) this.CHECKED_LIST.push(element);
    }
    this.CHECKED_LIST = JSON.stringify(this.CHECKED_LIST);
  }
}
