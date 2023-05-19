import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent implements OnInit {
  @Input() cardTitle!: string;
  @Input() showZoomIcon!: boolean;
  @Input() showSettingsIcon!: boolean;
  @Input() showHelpIcon!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
