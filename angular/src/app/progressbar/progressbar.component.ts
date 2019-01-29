import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../services/progress-bar.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  public active: boolean;

  public constructor(spinner: ProgressBarService) {
    spinner.status.subscribe((status: boolean) => {
      this.active = status;
    });
  }

  ngOnInit() {
  }

}
