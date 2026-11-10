import { FormControl } from "@angular/forms";
import { UserResponse } from "../user/user";

export interface TaskFormControl {
  title: FormControl<string>;
  description: FormControl<string>;
  dueDate: FormControl<string>
}

export interface TaskData {
  title: string;
  description: string;
  dueDate: string;
}

export interface TaskRequest extends TaskData {
  userId: number;
  taskStatusCode: number;
}

export interface TaskResponse extends TaskData {
  id: number;
  taskStatus: TaskStatus;
  user: UserResponse;
}

export enum TaskStatus {
    Completed,
    InProgress,
    Paused
}