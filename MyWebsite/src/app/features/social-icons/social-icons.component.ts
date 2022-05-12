import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {
  @Input() size: number = 2;
  iconssize: string = '';
  constructor() {
  }

  ngOnInit(): void {
    this.iconssize = 'fa-' + this.size + 'x';
  }

}
