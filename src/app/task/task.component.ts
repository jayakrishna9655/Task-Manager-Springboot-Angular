import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';  // Correct import
import { TaskService } from './task.service';
import { Task } from './task.model';
import { subscribe } from 'node:diagnostics_channel';

@Component({
  selector: 'app-task',
  standalone:true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit{
  newTask: Task = { itemName: '', itemId: '' };

  tasks:Task[]= [];

  editingtask:Task |null=null;

  updatedTask:Task =  { itemName: '', itemId: '' };

  ngOnInit(): void {
    this.getAllTasks();
  }

  constructor(private taskService: TaskService) {}

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe((createdtask) => {
      this.newTask = { itemName: '', itemId: '' }; // Reset task after creation
    this.tasks.push(createdtask) ;
    });
  }
 
  getAllTasks(){
    this.taskService.getalldata().subscribe((tasks) => {
      this.tasks = tasks 
    })
  }

  edittask(task:Task){
    this.editingtask=task;
    this.updatedTask={...task};//create a copy of for edtting
  }

  updatetask():void{
      if(this.editingtask){
        this.taskService.updatetask(this.editingtask.id!, this.updatedTask)
        .subscribe((result ) => {
          const index=this.tasks.findIndex((tasks)=> tasks.id == this.editingtask!.id )
          if(index !==-1){
            this.tasks[index]=result;
            this.cancelEdit()
          }
      })
      }
  }

  cancelEdit(){
    this.editingtask = null; 
    this.updatedTask = { itemName: '', itemId: '' }; 
  }


  deleteTask(taskId:number){
    if(confirm("Are you sure you want to delete this task?")){
      this.taskService.deleteTask(taskId).subscribe(() => {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        if(this.editingtask && this.editingtask.id === taskId){
         this.cancelEdit();
        }
    })
    }
}
}
