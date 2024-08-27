import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product:any;
}
