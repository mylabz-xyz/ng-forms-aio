import { Component } from '@angular/core';
import { AnimatedLinkProvider } from '../../providers';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  constructor(public animatedLinkProvider:AnimatedLinkProvider){}
}
