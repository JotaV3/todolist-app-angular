import { Component, Input, output, OnInit } from '@angular/core';
import { TaskResponse } from '../task';
import { required } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'app-task-template',
  styleUrl: './task-template.scss',
  templateUrl: './task-template.html',
})
export class TaskTemplate implements OnInit{
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
  }

  onClickDeleteTask(): void{
    this.isConfirmationVisible = true;
  }
}