import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private readonly http = inject(HttpClient)

    private isValidUrl(url: string): boolean {
  return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(url);
}

private formatImage(url: string): string {
  if (!url) return '/assets/fallback.jpg';

  // ✅ remote valid URL
  if (this.isValidUrl(url)) return url;

  // ✅ local asset
  return '/assets/' + url;
}


  //     getPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>('http://localhost:3000/posts?_expand=user');
  // }
  
getPosts(): Observable<Post[]> {
  return this.http.get<Post[]>('http://localhost:3000/posts?_expand=user').pipe(
    map(posts =>
      posts.map(post => ({
        ...post,
        imageUrl: this.formatImage(post.imageUrl),
        user: {
          ...post.user,
          avatarUrl: this.formatImage(post.user.avatarUrl)
        }
      }))
    )
  );
}


//   // ✅ GET single post
//   getPost(id: number): Observable<Post> {
//     return this.http.get<Post>(`${this.apiUrl}/${id}`);
//   }

  // ✅ PUT (update post)
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${'http://localhost:3000/posts'}/${post.id}`, post);
  }

}
