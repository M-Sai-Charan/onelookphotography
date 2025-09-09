import { Component, OnInit, signal } from '@angular/core';
import { OlpRoutingModule } from "./modules/olp/olp-routing-module";
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [ SharedModule,OlpRoutingModule],
})
export class App implements OnInit {
  protected readonly title = signal('onelookphotography');
  constructor() {}
  ngOnInit(): void {}
  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }
}
