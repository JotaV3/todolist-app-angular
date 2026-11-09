import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:8080/tasks'
}
