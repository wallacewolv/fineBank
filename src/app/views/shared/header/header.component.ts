import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'fbank-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [DatePipe],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  public currentDate = '';
  public notifications = [];

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.formattedDate();
  }
  private formattedDate() {
    const date = new Date();
    this.currentDate = this.datePipe.transform(date, 'MMM dd, yyyy') ?? '';
  }
}
