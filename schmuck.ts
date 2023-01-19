import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {

  constructor(id: number, wert: number, public beschreibung: string) {
	super(id,wert);
  }
  
  toString(): string {
    
    let text: string = "\n\nSchmuckstück: ";
    text += super.toString();
    text += "\bezeichnung: " + this.beschreibung;
    return text;
  }

}