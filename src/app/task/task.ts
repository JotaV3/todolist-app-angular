import { FormControl } from "@angular/forms"

export interface TaskFormControl{
    title: FormControl<string>;
    description: FormControl<string>;
    dueDate: FormControl<string>
}

export interface TaskData{
  title: string;
  description: string;
  dueDate: string;
};