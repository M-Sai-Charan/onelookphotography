import { Component, OnInit } from '@angular/core';
import { Olp } from '../olp';

@Component({
  selector: 'app-olp-menu',
  standalone: false,
  templateUrl: './olp-menu.html',
  styleUrl: './olp-menu.scss'
})
export class OlpMenu  implements OnInit {
  allowedMenuItems: any = [];

  constructor(private olp:Olp) { }
  ngOnInit(): void { 
    this.getOLPMenuItems()
  }
   getOLPMenuItems() {
    this.olp.getOLPMenuItems('masterdata').subscribe((res: any) => {
      this.allowedMenuItems = res.data.uiRoutes;
    });
  }
}
