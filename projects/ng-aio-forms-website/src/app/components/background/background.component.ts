import { Component, OnInit } from '@angular/core';
import { BackgroundProvider } from '../../providers';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  constructor(private backgroundProvider: BackgroundProvider) {}

  ngOnInit(): void {
    this.backgroundProvider.init(
      document.getElementById('canvas') as HTMLCanvasElement
    );
    this.backgroundProvider.run();
  }
}
