import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-template',
  styleUrl: './template.scss',
  templateUrl: './template.html',
})
export class Template {}
