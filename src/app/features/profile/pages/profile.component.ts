import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule} from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProfileService } from '../services/profile.service';
import { User } from '../models/user.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  user = signal<User | null>(null);
  form: FormGroup;
  isLoading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private readonly profileService: ProfileService,
  ) {
    this.form = this.fb.group({
      name: [''],
      bio: [''],
    });
  }

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
