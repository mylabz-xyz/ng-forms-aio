import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss']
})
export class ExplanationComponent implements OnInit {
public actualTab!:any
  constructor() { }

  ngOnInit(): void {
  }

}
