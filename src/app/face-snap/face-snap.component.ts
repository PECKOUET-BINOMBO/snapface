import { FaceSnapsService } from './../services/face-snaps.service';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnap } from './../models/face-snap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;


  snapButtonText! : string;
  userHasSnapped! : boolean;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {


    this.snapButtonText = 'Oh snap!';
    this.userHasSnapped = false;
  }

  unSnap() {

    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
    this.snapButtonText = 'Oh snap!';
    this.userHasSnapped = false;

  }

  snap() {

    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
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
