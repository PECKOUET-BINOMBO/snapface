export class FaceSnap {

  location? : string;

  constructor(
    public titre: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps : number, ) {}

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  setLocation(location: string): void{

    this.location = location;
  }

}
