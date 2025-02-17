import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private apiUrl = 'http://localhost:8080/api/create';

  constructor( private httpClient: HttpClient) { }

  createTask(newtask: any):Observable<Task>{
  return this.httpClient.post<Task>(this.apiUrl,newtask);
  } 

  getalldata():Observable<Task[]>{

    return this.httpClient.get<Task[]>(this.apiUrl);
  
    }

    updatetask(taskId:number,updatedtask:Task):Observable<Task>{
      return this.httpClient.put<Task>(this.apiUrl+'/'+taskId,updatedtask);
    }

    deleteTask(taskId:number){
      return this.httpClient.delete<Task>(this.apiUrl+'/'+taskId);
    }
    
  
}
