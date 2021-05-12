//Describe (write) how you could use a single array to implement three stacks.

var ThreeInOne = function () {
  this.container = [];
  //finish this
  this.middleBeginning = 0;
  this.middleEnd = 0;
};

ThreeInOne.prototype.push1 = function (value) {
  this.container.unshift(value);
  this.middleBeginning++;
  this.middleEnd++;
};

ThreeInOne.prototype.push2 = function (value) {
  this.container.splice(this.middleEnd, 0, value);
  this.middleEnd++;
};

ThreeInOne.prototype.push3 = function (value) {
  this.container.push(value);
};

ThreeInOne.prototype.pop1 = function () {
  if (this.isEmpty1()) {
    return null;
  }
  this.middleBeginning--;
  this.middleEnd--;
  return this.container.shift();

};

ThreeInOne.prototype.pop2 = function () {
  if (this.isEmpty2()) {
    return null;
  }
  this.middleEnd--;
  let poppedValue = this.container.splice(this.middleEnd - 1, 1)
  return poppedValue[0];
};

ThreeInOne.prototype.pop3 = function () {
  if (this.isEmpty3()) {
    return null;
  }
  return this.container.pop();
};

ThreeInOne.prototype.peek1 = function () {
  if (this.isEmpty1()) {
    return null;
  }
  return this.container[0];
};

ThreeInOne.prototype.peek2 = function () {
  if (this.isEmpty2()) {
    return null;
  }
  return this.container[this.middleEnd];
};

ThreeInOne.prototype.peek3 = function () {
  if (this.isEmpty3()) {
    return null;
  }
  return this.container[this.container.length - 1];
};

ThreeInOne.prototype.isEmpty1 = function () {
  if (this.middleBeginning === 0) {
    return true;
  }
  return false;
};

ThreeInOne.prototype.isEmpty2 = function () {
  if (this.middleBeginning === this.middleEnd) {
    return true;
  }
  return false;
};

ThreeInOne.prototype.isEmpty3 = function () {
  if (this.middleEnd === this.container.length - 1) {
    return true;
  }
  return false;
};

module.exports = ThreeInOne;
