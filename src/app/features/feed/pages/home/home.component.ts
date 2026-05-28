import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home-page',
  imports: [PostComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
