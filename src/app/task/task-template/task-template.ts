import { Component, Input, output, OnInit } from '@angular/core';
import { TaskResponse } from '../task';

@Component({
  imports: [],
  selector: 'app-task-template',
  styleUrl: './task-template.scss',
  templateUrl: './task-template.html',
})
export class TaskTemplate implements OnInit{
  private deletionTimer: ReturnType<typeof setTimeout> | undefined;

  @Input({required: true}) task!: TaskResponse;

  isConfirmationVisible!: boolean;

  // event
  deleted = output<number>();

  ngOnInit(): void {
    this.isConfirmationVisible = false;
  }

  onDeletionConfirmed(){
    this.deleted.emit(this.task.id);
  }

  onDeletionCancelled(){
    this.isConfirmationVisible = false;

    if(this.deletionTimer !== undefined){
      clearTimeout(this.deletionTimer);
      this.deletionTimer = undefined;
    }
  }

  onClickDeleteTask(): void{
    this.isConfirmationVisible = true;

    this.deletionTimer = setTimeout(() => {
      this.onDeletionConfirmed();
    }, 3000);
  }
}