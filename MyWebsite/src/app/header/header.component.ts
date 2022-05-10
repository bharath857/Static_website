import { Component, EventEmitter, OnInit, Output, NgZone, OnDestroy } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menu = new EventEmitter<boolean>();

  closemenu: boolean = false;

  constructor(private readonly viewportRuler: ViewportRuler,
    private readonly ngZone: NgZone) {
    this.viewportRuler
      .change(200)
      .subscribe(() => this.ngZone.run(() => {
        this.onHamClose()
      }
      ));
  }

  ngOnInit(): void {
  }

  onHamOpen() {
    this.closemenu = true
    this.menu.emit(false)
  }

  onHamClose() {
    this.closemenu = false
    this.menu.emit(true)
  }

}
