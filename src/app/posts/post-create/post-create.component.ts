import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  enteredTitle = "";
  enteredContent= "";
  @Output() postCreated = new EventEmitter<Post>();
  
  onAddPost(form: NgForm){
    if(form.invalid){ //checking to see if form has content
      return;
    }
    const post:Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }
  ngOnInit() {
  }

}
