import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskRequest, TaskResponse } from '../task/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'https://todolist-api-java-y415.onrender.com/tasks';
    private readonly tasksByUserIdUrl = `${this.baseUrl}/me`;

    delete(id: number): Observable<void>{
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    create(task: TaskRequest): Observable<TaskResponse> {
        return this.http.post<TaskResponse>(this.baseUrl, task);
    }

    // gets all of the user's tasks
    getAllByUserId(): Observable<TaskResponse[]>{
        return this.http.get<TaskResponse[]>(`${this.tasksByUserIdUrl}`);
    }
}
