import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PythonApiServiceService } from 'projects/lib-services/src/public-api';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.less',
  inputs:[],
  standalone: true
})
export class TodoListComponent {
  tasks: any[] = [];
  newTaskTitle = '';

  constructor(private taskService: PythonApiServiceService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(): void {
    const newTask = { id: Date.now(), title: this.newTaskTitle };
    if(this.newTaskTitle == null || this.newTaskTitle == undefined || this.newTaskTitle === "")
      return console.log("Empty task");
    this.taskService.addTask(newTask).subscribe(() => {
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }

}
