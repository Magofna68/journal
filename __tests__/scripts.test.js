import { EntryOptionPlugin } from "webpack";
import { Entry, Journal } from "../src/journal.js";

describe("TEMPLATE TEST", () => {
  test("sanity check", () => {
    expect(true).toEqual(true);
  });

  test("it needs to have an Entry object", () => {
    const myEntry = new Entry();
    expect(myEntry).toBeDefined();
  });

  test("it needs to have a Journal object", () => {
    const myJournal = new Journal();
    expect(myJournal).toBeDefined();
  });

  test("Journal should contain a place for entries to be stored", () => {
    const myJournal = new Journal();
    expect(myJournal.entries).toBeDefined();
  });

  test("Entry should include a title", () => {
    const myEntry = new Entry("Test Title");
    expect(myEntry.title).toEqual("Test Title");
  });

  test("Entry should include a body", () => {
    const myEntry = new Entry("Test Title", "Test Body");
    expect(myEntry.body).toEqual("Test Body");
  });

  test("Should generate a word count", () => {
    const myEntry = new Entry("test title", "test body");
    expect(myEntry.getWordCount()).toBeDefined();
  });

  test("Entry.getWordCount should return the # of words in the entry body", () => {
    const myEntry = new Entry("Title", "Body");
    const numberOfWords = myEntry.getWordCount();
    expect(numberOfWords).toEqual(1);
  });

  test("Entry.getWordCount should return the # of words in the entry body", () => {
    const myEntry = new Entry("Title", "Body Body");
    const numberOfWords = myEntry.getWordCount();
    expect(numberOfWords).toEqual(2);
  });

  test("Entry.getWordCount should return the # of words in the entry body", () => {
    const myEntry = new Entry(
      "Title",
      "Body BodyBody BodyBody BodyBody BodyBody BodyBody Body"
    );
    const numberOfWords = myEntry.getWordCount();
    expect(numberOfWords).toEqual(7);
  });

  test("Entry.getTeaser should return the first 8 words in the body", () => {
    const myEntry = new Entry(
      "test title",
      "test body body test toste tews tect test"
    );
    const teaserText = myEntry.getTeaser();
    expect(teaserText.split(" ").length).toEqual(8);
  });
});
