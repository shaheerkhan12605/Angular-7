import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
	todos=[];
  	addItem=function(item){
  		this.todos.push(item);
  		// alert(this.todos)
  	}
  	check=function(){
  		// alert("hello")
  	}
  	get=function(){
  		// alert(this.todos)
  		return this.todos;
  	}
    getItem=function(item){
      return this.todos[item];
    }
    editItem=function(item,data){
      console.log(item)
      console.log(data);
      this.todos[item]=data;
    }
    deleteItem=function(item){
      console.log(item)
      this.todos.splice(item,1);
    }
}
