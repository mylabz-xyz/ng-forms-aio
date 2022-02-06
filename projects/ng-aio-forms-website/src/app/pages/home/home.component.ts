import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public forms: any = [
    {
      label: 'Ceci est un input',
      type: 'input',
      value: '',
      onChange: (e: any) => {
        console.log(e);
        console.log('input');
      },
    },
    {
      label: 'Ceci est un input',
      type: 'input',
      value: '',
      onChange: (e: any) => {
        console.log(e);
        console.log('input');
      },
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
