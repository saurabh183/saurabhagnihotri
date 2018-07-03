import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';

import { InformationComponent } from '../header/information/information.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  {

  constructor(public snackBar: MatSnackBar) { }

 openSnackBar() {

    this.snackBar.openFromComponent(InformationComponent, {
      duration: 5000,
      panelClass: ['snack-color']
    });
}
}
