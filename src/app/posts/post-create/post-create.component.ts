import { Component, OnInit} from '@angular/core';
//import { Output, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  enteredTitle = "";
  enteredContent= "";
  //postCreated = new EventEmitter<Post>();
  
  onAddPost(form: NgForm){
    if(form.invalid){ //checking to see if form has content
      return;
    }
    //this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content)
    form.resetForm();
  }
  ngOnInit() {
  }

}
