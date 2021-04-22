// Megjegyzések stílusa: JSDoc 3 -> http://usejsdoc.org/

/** Egy telket leíró osztály */
export default class Zar {
  private _probalkozas: number;

  /** Az osztály konstruktora
   * @constructor1
   * @param {string} sor A forrás file egy sora
   */
  public constructor(txtSorai: string) {
    txtSorai.split("\n").forEach(i => {
      const aktSor: string = i.trim();
      if (aktSor.length !== 0) {
        this._probalkozas.push(new Zar(aktSor));
      }
    })
  }

 
}
