export class FaceSnap {
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
}
