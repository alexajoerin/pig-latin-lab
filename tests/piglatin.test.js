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
  test("word that starts with one consonant", () => {
    expect(translate("strap")).toBe("apstray");
  });
  test("words that start with vowels and have a uppercase letter", () => {
    expect(translate("Enchant")).toBe("enchantway");
  });
  test("words that start with consonants and have an uppercase letter", () => {
    expect(translate("Black")).toBe("ackblay");
  });
});
