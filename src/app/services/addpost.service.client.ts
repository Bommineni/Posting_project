import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
 export class AddpostService {
  baseUrl = environment.baseUrl;

  constructor(private _http: Http) { }

  createPost(question: String, answer: String, tag: String) {
    console.log('cilentdata');
    const postdata = {
      question: question,
      answer: answer,
      tag: tag
    };
    return this._http.post(this.baseUrl + '/api/addpost', postdata)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        });
  }

  updatePost(post) {
    return this._http.put(this.baseUrl + '/api/addpost/' + post._id, post)
      .map(
        (res: Response) => {
          const data = res.json();
          return 'updated';
    }
    );
  }
  findAllPosts() {
    console.log(this.baseUrl);
    return this._http.get(this.baseUrl + '/api/addpost')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deletePost(postId) {
    console.log('client side service' + postId);
    console.log('Url client side' + this.baseUrl + '/api/deletepost/' + postId);
    return this._http.delete(this.baseUrl + '/api/deletepost/' + postId)
      .map(
        (res: Response) => {
          const data = res.json();
        }
      );
  }
}
