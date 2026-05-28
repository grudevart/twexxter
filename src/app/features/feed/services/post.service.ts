import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private readonly http = inject(HttpClient)

      getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

//   // ✅ GET single post
//   getPost(id: number): Observable<Post> {
//     return this.http.get<Post>(`${this.apiUrl}/${id}`);
//   }

//   // ✅ PUT (update post)
//   updatePost(post: Post): Observable<Post> {
//     return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post);
//   }

}
