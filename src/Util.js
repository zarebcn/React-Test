Array.prototype.withIndex = function() {
  return this.map((e,i) => ({elem: e, idx: i}))
};
