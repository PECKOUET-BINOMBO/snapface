import { SnapType } from './snap-type.type';
import { withHashLocation } from "@angular/router";

export class FaceSnap {

  location? : string;
  id: string;

  constructor(
    public titre: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps : number, ) {
      this.id = crypto.randomUUID().substring(0, 8);
    }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  snap(snapType: SnapType){
    if (snapType === 'snap'){
      this.addSnap();
    }else if (snapType === 'unsnap'){
      this.removeSnap();
    }
  }

  setLocation(location: string): void{

    this.location = location;
  }

  withLocation(location: string): FaceSnap{
    this.setLocation(location);
    return this;
  }

}
