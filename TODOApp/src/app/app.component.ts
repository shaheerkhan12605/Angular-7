import { Component } from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'TODOApp';
	todo=this.service.todos;
	constructor(private service:TodoService){

	}


}
