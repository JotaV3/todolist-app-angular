import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task-template',
  styleUrl: './task-template.scss',
  templateUrl: './task-template.html',
})
export class TaskTemplate {
  description: String = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, nisl vitae bibendum egestas, ante libero mattis massa, eget convallis arcu dui vel lacus. Ut euismod enim arcu, eget vestibulum purus rutrum vitae.";
}
