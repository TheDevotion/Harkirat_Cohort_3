class Promise2 {
  constructor(fn) {
    function afterDone() {
      this.resolve();
    }
    fn(afterDone);
  }

  then(callback) {
    this.resolve = callback;
  }
}
