const { translate } = require("../src/piglatin");

describe("translate function", () => {
  test("words that start with vowels", () => {
    expect(translate("apple")).toBe("appleway");
    expect(translate("expect")).toBe("expectway");
    expect(translate("ink")).toBe("inkway");
    expect(translate("ocean")).toBe("oceanway");
    expect(translate("under")).toBe("underway");
  });
  test("word that starts with one consonant", () => {
    expect(translate("bake")).toBe("akebay");
  });
  test("word with two consonants", () => {
    expect(translate("space")).toBe("acespay");
  });
  test("word that starts with three consonants", () => {
    expect(translate("strap")).toBe("apstray");
  });
  test("words that start with vowels and have a uppercase letter", () => {
    expect(translate("Enchant")).toBe("Enchantway");
  });
  test("words that start with consonants and have an uppercase letter", () => {
    expect(translate("Black")).toBe("ackBlay");
  });
  test("allow punctuation in the input string", () => {
    expect(translate("can't")).toBe("an'tcay");
  });
  test("Don't translate words that have numbers or symbols", () => {
    expect(translate("189")).toBe("189");
  });
  test("Don't translate words that have numbers or symbols", () => {
    expect(translate("hello@grandcircus.co")).toBe("hello@grandcircus.co");
  });
  test("each word is translated in a phrase", () => {
    expect(translate("a quick brown fox")).toBe("away uickqay ownbray oxfay");
  });
  test("each word is translated in a phrase", () => {
    expect(translate("A Quick Brown Fox")).toBe("Away uickQay ownBray oxFay");
  });
});
