import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  standalone: true,
  imports: [CommonModule, CardComponent],
})
export class HealthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
