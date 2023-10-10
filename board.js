export default function Board(bn, i) {
  let j = 0;
  this.index = i;
  this.numbers = {};
  this.rows = [0, 0, 0, 0, 0];
  this.columns = [0, 0, 0, 0, 0];
  this._score = 0;
  this.score = 0;
  this.isBingo = false;
  bn.forEach((n) => {
    this.numbers[n] = {
      row: Math.floor(j / 5),
      column: j % 5,
    };
    j++;
    this._score += n;
  });

  this.checkNumber = function (n) {
    const result = { isBingo: this.isBingo, score: this.score };
    if (this.isBingo) return result;

    let row = 0;
    let column = 0;

    if (this.numbers[n] || this.numbers[n] === 0) {
      row = this.numbers[n].row;
      column = this.numbers[n].column;
      this.rows[row] += 1;
      this.columns[column] += 1;
      this._score -= n;
    }
    this.isBingo = this.rows[row] === 5 || this.columns[column] === 5;
    this.score = this.isBingo ? this._score * n : 0;
    return result;
  };
}
