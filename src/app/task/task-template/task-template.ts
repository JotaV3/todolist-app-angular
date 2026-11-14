import { Component, Input} from '@angular/core';
import { TaskResponse } from '../task';
import { required } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'app-task-template',
  styleUrl: './task-template.scss',
  templateUrl: './task-template.html',
})
export class TaskTemplate {
  @Input({required: true}) task!: TaskResponse;
}
