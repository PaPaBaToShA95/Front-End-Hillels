
let ladder = {
  step: 0,
  up: function () {
    this.step += 1;
    return this
  },
  down: function () {
    this.step -= 1;
    return this
  },
  showStep: function () {
    console.log(this.step)
    return this
  }
};

ladder.up().up().down().up().showStep()





let counter = {
  cycle: 0,
  increase: function () {
    this.cycle += 1;
    return this
  },
  decrease: function () {
    this.cycle -= 1;
    return this
  },
  set: function (value) {
    this.cycle += value;
    return this
  },
  show: function () {
    console.log(this.cycle)
  }
};

counter.increase().increase().increase().set(20).show()