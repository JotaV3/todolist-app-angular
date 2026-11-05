import { Component, OnInit, output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskFormControl, TaskData } from '../task';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-task-registration',
  styleUrl: './task-registration.scss',
  templateUrl: './task-registration.html',
})
export class TaskRegistration implements OnInit{
  form!: FormGroup<TaskFormControl>;
  submittedForm: TaskData | null = null;

  // event
  cancel = output<void>();

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  onClickCancelBtn(){
    this.cancel.emit();
  }

  onSubmit(): void{
    if(this.form.invalid) return;

    this.submittedForm = this.form.getRawValue();

    console.log(this.submittedForm);
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
}
