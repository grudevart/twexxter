import { Component, inject, signal} from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { ProfileService } from '../../../features/profile/services/profile.service';
import { User } from '../../../features/profile/models/user.model';

@Component({
  selector: 'app-layout-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatCardModule, MatCardHeader, MatCardTitle],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class Toolbar {
  private readonly profileService = inject(ProfileService)
  user = signal<User | null>(null);

  ngOnInit(): void {
    this.profileService.getUser().subscribe((user) => {
      this.user.set(user);
      console.log(this.user()?.avatarUrl);
    });
  }

}
