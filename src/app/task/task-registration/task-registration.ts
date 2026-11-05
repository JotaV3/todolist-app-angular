import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Task, TaskData } from '../task';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-task-registration',
  styleUrl: './task-registration.scss',
  templateUrl: './task-registration.html',
})
export class TaskRegistration implements OnInit{
  form!: FormGroup<Task>;
  submittedForm: TaskData | null = null;

  ngOnInit(): void {
    this.form = new FormGroup<Task>({
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

  onSubmit(): void{
    if(this.form.invalid) return;

    this.submittedForm = this.form.getRawValue();

    console.log(this.submittedForm);
  }
}
