import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis longtemps',
      'https://img.freepik.com/photos-premium/ours-peluche-mignon-sous-pluie-fond-cinematique-pour-fond-ecran_687553-2141.jpg',
      new Date(),
      0
    );

    this.myOtherSnap = new FaceSnap(
      'Paul',
      'Bienvenue à la maison',
      'https://i.pinimg.com/originals/a4/89/ff/a489ff86c6cc2b817e36759eec53ca23.jpg',
      new Date(),
      0
    );

    this.myLastSnap = new FaceSnap(
      'Axel',
      'Le départ en attendant le retour',
      'https://c4.wallpaperflare.com/wallpaper/854/136/948/motorcycles-harley-davidson-wallpaper-preview.jpg',
      new Date(),
      0
    );
  }


}
