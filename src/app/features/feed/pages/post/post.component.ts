import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  
@Input() post!: Post;

  constructor(private postService: PostService) {}


  // likePost(): void {
  //   const updatedPost: Post = {
  //     ...this.post,
  //     likes: this.post.likes + 1
  //   };

  //   this.postService.updatePost(updatedPost).subscribe(res => {
  //     this.post = res; // update UI
  //   });
  // }

}
