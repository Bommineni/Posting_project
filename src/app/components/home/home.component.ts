import { Component, OnInit } from '@angular/core';
import {AddpostService} from '../../services/addpost.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private _addpostService: AddpostService ) { }

  question: String;
  answer: String;
  tag: String;
  postId: String;
  successMessage: Boolean = false;
  posts: any;


  ngOnInit() {
    this.findAllPosts();
  }

  findAllPosts() {
    return this._addpostService.findAllPosts()
      .subscribe(
        (data: any) => {
        this.posts = data;
        console.log('posts', this.posts);
        }
      );
  }


  deletePost(postId) {
    console.log(postId);
    return this._addpostService.deletePost(postId)
      .subscribe(
        (data: any) => {
          this.successMessage = true;
          this.ngOnInit();
        }
      );
  }
}
