import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  editId=null;
  constructor(private todoService:TodoService,private router:Router,private activatedRoute:ActivatedRoute ) { 
  	if(this.activatedRoute){
  		// console.log(this.activatedRoute.snapshot.params.id)
  	 this.editId=this.activatedRoute.snapshot.params.id;
     this.getTodo(this.editId);
    }else{
  		console.log("create")
  	}
  }
  ngOnInit(){

  }
  addTodo=function(item){
  	this.todoService.addItem(item);
  	this.router.navigate(['']);
  }
  getTodo=function(item){
    this.item=this.todoService.getItem(item);
  }
  editTodo=function(item,data){
    this.todoService.editItem(item,data);
    this.router.navigate(['']);
  }
  deleteTodo=function(item){
    this.todoService.deleteItem(item);
    this.router.navigate(['']);
  }
}
