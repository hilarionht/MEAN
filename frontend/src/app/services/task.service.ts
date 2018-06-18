import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly URL_API = 'http://localhost:3000/api/task';
  constructor(private http:HttpClient) { }

  
  postTask(task: Task) {
    return this.http.post(this.URL_API, task);
  }

  getTasks() {
    return this.http.get(this.URL_API);
  }

  putTask(task: Task) {
    return this.http.put(this.URL_API + `/${task._id}`, task);
  }
  deleteTask(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
