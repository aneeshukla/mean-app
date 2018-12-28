import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   {title: "First post", content: "First post ka content"},
  //   {title: "Second post", content: "2nd post ka content"},
  //   {title: "Third post", content: "3rd post ka content"},
  // ];
  @Input() posts=[];
  constructor() { }

  ngOnInit() {
  }

}
