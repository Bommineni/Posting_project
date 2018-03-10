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
        console.log(this.posts[0]._id);
        }
      );
  }


  deletePost(postsId) {
    return this._addpostService.deletePost(postsId)
      .subscribe(
        (data: any) => {
          this.successMessage = true;
          console.log(postsId);
          this.ngOnInit();
        }
      );
  }
}
