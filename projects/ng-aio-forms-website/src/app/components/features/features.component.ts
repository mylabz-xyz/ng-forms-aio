import { AfterViewInit, Component } from '@angular/core';
import { AnimatedLinkProvider } from '../../providers';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements AfterViewInit{
  constructor(public animatedLinkProvider:AnimatedLinkProvider){}

  ngAfterViewInit(): void {
      this.animatedLinkProvider.initBurst()
  }
}
