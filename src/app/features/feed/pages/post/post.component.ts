import { ChangeDetectionStrategy, Component, inject, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-post',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  private postService = inject(PostService);

  @Input() post!: Post;
  likeEmitter = output<Post>();

  likePost(): void {
    const updatedPost: Post = {
      ...this.post,
      likes: this.post.likes + 1,
    };

    this.postService.updatePostLikes(updatedPost.id, updatedPost.likes).subscribe((res) => {
      this.post = res;
      this.likeEmitter.emit(res);
    });
  }
}
