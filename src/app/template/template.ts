import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskRegistration } from '../task/task-registration/task-registration';

@Component({
  imports: [RouterOutlet, TaskRegistration],
  selector: 'app-template',
  styleUrl: './template.scss',
  templateUrl: './template.html',
})
export class Template implements OnInit{
  isFormVisible!: boolean;

  ngOnInit(): void {
    this.isFormVisible = false;
  }

  onClickCreateTask(){
    this.isFormVisible = true;
  }

  onCancelTaskRegistration(){
    this.isFormVisible = false;
  }
}
