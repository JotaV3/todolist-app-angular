import { Routes } from '@angular/router';
import { Template } from './template/template';
import { TaskRegistration } from './task/task-registration/task-registration';

export const routes: Routes = [
    {
        component: Template,
        path: '',
        children: [
            {
                component: TaskRegistration,
                path: 'task-registration'
            }
        ]
    }
];
