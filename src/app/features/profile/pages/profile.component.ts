import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule} from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProfileService } from '../services/profile.service';
import { User } from '../models/user.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

/** @title Form field appearance variants */
@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  private readonly profileService = inject(ProfileService)
  private readonly fb = inject(FormBuilder)
  user = signal<User | null>(null);
  form = this.fb.group({
      name: [''],
      bio: [''],
    });
  isLoading: boolean = true;

  ngOnInit(): void {
    this.profileService.getUser().subscribe((user) => {
      this.user.set(user);
      this.isLoading = false;
      console.log(this.user()?.avatarUrl);

      this.form.patchValue({
        name: user.name,
        bio: user.bio ?? '',
    });
    });
  }
}
