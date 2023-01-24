import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private router: Router) {
  }

  goToHome(): void {
    this.router.navigate(['/'])
  }
}
