import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'querySelector';
  text = '';
  value = '';

  changeText(): void {
    this.text = this.value;
  }
}
