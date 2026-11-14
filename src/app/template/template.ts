import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskRegistration } from '../task/task-registration/task-registration';
import { TaskTemplate } from '../task/task-template/task-template';
import { TaskResponse } from '../task/task';
import { TaskService } from '../services/task-service';

@Component({
  imports: [RouterOutlet, TaskRegistration, TaskTemplate],
  selector: 'app-template',
  styleUrl: './template.scss',
  templateUrl: './template.html',
})
export class Template implements OnInit{
  isFormVisible!: boolean;
  tasks = signal<TaskResponse[]>([]);

  private readonly taskService = inject(TaskService);

  ngOnInit(): void {
    this.isFormVisible = false;

    // userId example
    const userId = 1;

    this.taskService.getAll().subscribe({
      next: allTasks =>{
        this.tasks.set(allTasks.filter(task => task.user.id === userId))
      },

      error: error => console.log("Get all tasks error")
    })
  }

  onClickCreateTask(){
    this.isFormVisible = true;
  }

  onCancelTaskRegistration(){
    this.isFormVisible = false;
  }
}
