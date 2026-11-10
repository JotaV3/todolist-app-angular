import { Component, inject, OnInit, output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskFormControl, TaskData, TaskRequest } from '../task';
import { TaskService } from '../../services/task-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-task-registration',
  styleUrl: './task-registration.scss',
  templateUrl: './task-registration.html',
})
export class TaskRegistration implements OnInit{
  form!: FormGroup<TaskFormControl>;

  // service
  service = inject(TaskService);

  // event
  cancel = output<void>();

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  onClickCancelBtn(){
    this.cancel.emit();
  }

  onSubmit(): void{
    if(this.isFormInvalid()) return;

    const payload = this.createTaskRequest();
    this.service.create(payload).subscribe({
      next: (response) => {
        console.log('Card created succefully.', response);
      },
      error: (error) => console.log('Unexpected error.', error)
    });
  }

  // the userId is associated with a user already saved in the database.
  private createTaskRequest(): TaskRequest {
    const taskRequest: TaskRequest = {
      ...this.form.getRawValue(),
      userId: 1,
      taskStatusCode: 2
    }

    return taskRequest;
  }

  private initializeFormGroup(){
    this.form = new FormGroup<TaskFormControl>({
      title: new FormControl('', {
        nonNullable: true, 
        validators: [Validators.required]
      }),
      description: new FormControl(),
      dueDate: new FormControl('', {
        nonNullable: true, 
        validators: [Validators.required]
      })
    })
  }

  private isFormInvalid(): boolean{
    if(this.form.invalid){
      this.form.markAllAsTouched();

      return true;
    }

    return false;
  }
}
