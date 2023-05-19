import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
