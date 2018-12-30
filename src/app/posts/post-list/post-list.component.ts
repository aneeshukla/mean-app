import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {  //life cycle hook

  // posts = [
  //   {title: "First post", content: "First post ka content"},
  //   {title: "Second post", content: "2nd post ka content"},
  //   {title: "Third post", content: "3rd post ka content"},
  // ];
  posts:Post[] = [];
  private postsSub: Subscription;
  
  constructor(public postsService: PostsService) { }

  ngOnInit() {  //automatically executed when component is created.
    this.posts = this.postsService.getPosts(); 
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[])=>{
        this.posts = posts;
      }); //takes 3 args: 1-the fn to be called when new data emitted(received), 2-when error emitted(never the case here), 3-when the observable is completed, that is, when no more values expected(never the case here)
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();  //needed to prevet memory leaks
  }
}
