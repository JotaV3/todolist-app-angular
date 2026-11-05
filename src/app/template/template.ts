import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskRegistration } from '../task/task-registration/task-registration';

@Component({
  imports: [RouterOutlet, TaskRegistration],
  selector: 'app-template',
  styleUrl: './template.scss',
  templateUrl: './template.html',
})
export class Template {
  isFormVisible: boolean = false;

  onClickCreateTask(){
    this.isFormVisible = !this.isFormVisible;
  }
}
