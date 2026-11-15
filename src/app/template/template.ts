import { Component, OnInit, inject, signal } from '@angular/core';
import { TaskRegistration } from '../task/task-registration/task-registration';
import { TaskTemplate } from '../task/task-template/task-template';
import { TaskResponse } from '../task/task';
import { TaskService } from '../services/task-service';
import { filter } from 'rxjs';

@Component({
  imports: [TaskRegistration, TaskTemplate],
  selector: 'app-template',
  styleUrl: './template.scss',
  templateUrl: './template.html',
})
export class Template implements OnInit{
  isFormVisible!: boolean;
  taskList = signal<TaskResponse[]>([]);

  private readonly taskService = inject(TaskService);

  ngOnInit(): void {
    this.isFormVisible = false;

    // userId example
    const userId = 1;

    this.taskService.getAllByUserId(userId).subscribe({
      next: allTasks =>{
        this.taskList.set(allTasks)
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
    this.taskList.update(taskList => [...taskList, task]);
    this.isFormVisible = false;
  }

  onTaskDeleted(id: number){
    this.taskService.delete(id).subscribe({
      next: () => {
        this.taskList.update(taskList => taskList.filter(task => task.id !== id));
      },

      error: error => console.error("Error deleting task")
    })
  }
}
