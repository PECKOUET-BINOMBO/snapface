import { SnapType } from './../models/snap-type.type';
import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps : FaceSnap[] =[

    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis longtemps',
      'https://img.freepik.com/photos-premium/ours-peluche-mignon-sous-pluie-fond-cinematique-pour-fond-ecran_687553-2141.jpg',
      new Date(),
      0
    ).withLocation('à la montagne'),

    new FaceSnap(
      'Paul',
      'Bienvenue à la maison',
      'https://i.pinimg.com/originals/a4/89/ff/a489ff86c6cc2b817e36759eec53ca23.jpg',
      new Date(),
      200
    ),

    new FaceSnap(
      'Axel',
      'Le départ en attendant le retour',
      'https://c4.wallpaperflare.com/wallpaper/854/136/948/motorcycles-harley-davidson-wallpaper-preview.jpg',
      new Date(),
      0
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapFaceSnapById(faceSnapId: string, snapType : SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.snap(snapType);
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  

}
