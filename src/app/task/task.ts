import { FormControl } from "@angular/forms"

export interface Task{
    title: FormControl<string>;
    description: FormControl<string>;
    dueDate: FormControl<string>
}