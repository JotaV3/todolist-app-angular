import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskRequest, TaskResponse } from '../task/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:8080/api/tasks';
    private readonly tasksByUserIdUrl = `${this.baseUrl}/user`;

    delete(id: number): Observable<void>{
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    create(task: TaskRequest): Observable<TaskResponse> {
        return this.http.post<TaskResponse>(this.baseUrl, task);
    }

    getAllByUserId(userId: number): Observable<TaskResponse[]>{
        return this.http.get<TaskResponse[]>(`${this.tasksByUserIdUrl}/${userId}`);
    }

    getAll(): Observable<TaskResponse[]> {
        return this.http.get<TaskResponse[]>(this.baseUrl);
    }
}
