import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskRequest, TaskResponse } from '../task/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:8080/tasks'

    create(task: TaskRequest): Observable<TaskResponse> {
        return this.http.post<TaskResponse>(this.apiUrl, task);
    }
}
