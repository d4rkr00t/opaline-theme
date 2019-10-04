let fs = require("fs");
let path = require("path");

let languageKeyWords = [
  "keyword.control.as",
  "keyword.control.at-rule.import",
  "keyword.control.conditional",
  "keyword.control.default",
  "keyword.control.export",
  "keyword.control.flow",
  "keyword.control.from",
  "keyword.control.import",
  "keyword.control.loop",
  "keyword.operator.assignment",
  "keyword.operator.expression.is",
  "keyword.operator.new",
  "keyword.operator.type.annotation.ts",
  "meta.type.function.ts",
  "meta.type.parameters.ts",
  "meta.var.expr",
  "punctuation.terminator.rule",
  "punctuation.terminator.statement",
  "storage.type.class",
  "storage.type.function",
  "storage.type.interface",
  "storage.type.type"
];

let literals = [
  // Includes booleans, null and undefined
  "constant.language",
  "constant.numeric",
  "string.quoted",
  "string.regexp",
  "string.template"
];

let functions = [
  "entity.name.function",
  "entity.name.tag",
  "entity.name.type",
  "entity.name.type.alias",
  "entity.name.type.class",
  "entity.name.type.interface",
  "entity.name.type.module",
  "meta.function-call",
  "new.expr",
  "support.class.component",
  "support.function"
];

let attentionSeekers = [
  "comment",
  "keyword.other.debugger",
  "keyword.other.important",
  "variable.other.jsdoc"
];

/**
 * Tokens that somehow have been overridden by other settings and therefore
 * need to reset.
 */
let defaults = [
  "cast.expr.ts",
  "constant.language.import-export-all",
  "entity.name.function.tagged-template",
  "keyword.operator.arithmetic",
  "keyword.operator.comparison",
  "keyword.operator.expression",
  "keyword.operator.increment",
  "keyword.operator.list",
  "keyword.operator.logical",
  "keyword.operator.pipe",
  "keyword.operator.relational",
  "keyword.operator.spread",
  "keyword.operator.ternary",
  "meta.array.literal",
  "meta.arrow",
  "meta.brace.round",
  "meta.definition.variable",
  "meta.function-call.arguments",
  "meta.function.expression",
  "meta.object-literal.key",
  "meta.object.type",
  "meta.objectliteral",
  "meta.parameters",
  "meta.return.type",
  "meta.return.type.arrow",
  "meta.template.expression",
  "meta.type.annotation",
  "punctuation.accessor",
  "punctuation.separator.comma",
  "support.class",
  "support.constant",
  "support.function.builtin.python",
  "support.type.primitive.ts",
  "support.type.property-name.css",
  "support.variable",
  "variable.language.arguments",
  "variable.language.this",
  "variable.other.constant",
  "variable.other.constant.property",
  "variable.other.object",
  "variable.other.property",
  "variable.other.readwrite"
];

let tokenColor = color => token => ({
  scope: token,
  settings: {
    foreground: color
  }
});

module.exports = function createTheme({
  outputPath,
  name,
  type,

  uiColors,

  languageKeyWordsColor,
  defaultColor,
  functionColor,
  literalColor,
  operatorColor,
  attentionColor
}) {
  let theme = {
    name,
    type,
    colors: uiColors,
    tokenColors: [
      ...languageKeyWords.map(tokenColor(languageKeyWordsColor)),
      ...literals.map(tokenColor(literalColor)),
      ...attentionSeekers.map(tokenColor(attentionColor)),
      ...functions.map(tokenColor(functionColor)),
      ...defaults.map(tokenColor(defaultColor))
    ]
  };

  fs.writeFileSync(
    path.join(__dirname, "..", "themes", outputPath + ".json"),
    JSON.stringify(theme, null, 2),
    "utf-8"
  );
};
