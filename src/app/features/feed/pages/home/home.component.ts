import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  inject,
} from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home-page',
  imports: [PostComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private postService = inject(PostService);
  posts = signal<Post[]>([]);

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts.set(posts);
    });
  }


metoda(updatedPost: Post) {
  console.log(updatedPost)
  this.posts.update((postArr) =>
    postArr.map(post =>
      // post.id === updatedPost.id ? updatedPost : post
            post.id === updatedPost.id ? {...post, likes: updatedPost.likes} : post
            
    )
  );
}

}
