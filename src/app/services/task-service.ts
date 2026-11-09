import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskData } from '../task/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:8080/tasks'

    create(task: TaskData): Observable<TaskData> {
        return this.http.post<TaskData>(this.apiUrl, task);
    }
}
