import { Component, OnInit, inject, signal } from '@angular/core';
import { TaskRegistration } from '../task/task-registration/task-registration';
import { TaskTemplate } from '../task/task-template/task-template';
import { TaskResponse } from '../task/task';
import { TaskService } from '../services/task-service';

@Component({
  imports: [TaskRegistration, TaskTemplate],
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

    this.taskService.getAllByUserId(userId).subscribe({
      next: allTasks =>{
        this.tasks.set(allTasks)
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

  onTaskCreated(task: TaskResponse){
    this.tasks.update(tasks => [...tasks, task]);
    this.isFormVisible = false;
  }
}
