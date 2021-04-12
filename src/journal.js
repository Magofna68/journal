export function Entry(title, body) {
  // if title=undefined or body=undefined, maybe return an error?
  // maybe we should handle undefined in here?
  this.title = title;
  this.body = body;
}

Entry.prototype.getWordCount = function () {
  // this.body and this.title are defined
  const wordsArray = this.body.split(" ");
  const numberOfWords = wordsArray.length;
  return numberOfWords;
};

Entry.prototype.getTeaser = function () {
  const wordsArray = this.body.split(" ");
  let firstEightWordsArray = [];
  for (let index = 0; index < 8; index = index + 1) {
    firstEightWordsArray.push(wordsArray[index]);
  }
  const firstEightWordsString = firstEightWordsArray.join(" ");
  return firstEightWordsString;
};
// Entry("title","one two three")
// wordsArray = ["one","two","three"]
// wordsArray.length = 3

export function Journal() {
  this.entries = [];
}

// https://jestjs.io/docs/expect
