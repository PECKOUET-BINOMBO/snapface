import { FaceSnap } from './../models/face-snap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;


  snapButtonText! : string;
  userHasSnapped! : boolean;

  ngOnInit(): void {


    this.snapButtonText = 'Oh snap!';
    this.userHasSnapped = false;
  }

  unSnap() {

    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh snap!';
    this.userHasSnapped = false;

  }

  snap() {

    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;

  }

  onSnap(): void {
    if (this.userHasSnapped != false){

      this.unSnap();

    }else {

      this.snap();
    }

  }



}
