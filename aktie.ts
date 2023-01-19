import { Gegenstand } from "./gegenstand";

export class Aktie extends Gegenstand{

  constructor(id: number, wert: number, public unternehmen: string, public nennwert: number) {
    super(id,wert);
    }
    
    toString(): string {
      
      let text: string = "\n\nAktien ";
      text += super.toString();
      text += "\nunternehmen: " + this.unternehmen;
      text += "\nnennwert: " + this.nennwert
      return text;
    }
}