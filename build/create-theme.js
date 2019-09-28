let fs = require("fs");
let path = require("path");

let nonEssentials = [
  "cast.expr.ts",
  "keyword.control.as.ts",
  "keyword.control.at-rule.import",
  "keyword.control.default",
  "keyword.control.export",
  "keyword.control.from",
  "keyword.control.import",
  "keyword.operator.expression.is",
  "keyword.operator.type.annotation.ts",
  "meta.return.type.arrow.ts",
  "meta.return.type.ts",
  "meta.type.annotation",
  "meta.type.function.ts",
  "meta.type.function.ts",
  "meta.type.parameters.ts",
  "meta.var.expr",
  "punctuation.terminator.rule",
  "punctuation.terminator.statement",
  // Includes: `boolean`, `any`, `string`...
  "support.type.primitive.ts"
];

let literals = [
  // Includes booleans, null and undefined
  "constant.language",
  "constant.numeric",
  "string.quoted",
  "string.regexp",
  "string.template"
];

let operators = [
  "keyword.operator.arithmetic",
  "keyword.operator.comparison",
  "keyword.operator.expression",
  "keyword.operator.increment",
  "keyword.operator.list",
  "keyword.operator.logical",
  "keyword.operator.pipe",
  "keyword.operator.relational",
  "keyword.operator.spread",
  "keyword.operator.ternary"
];

let functions = [
  "entity.name.function",
  "entity.name.type.module",
  "entity.name.type.class",
  "entity.name.type.alias",
  "meta.function-call",
  "new.expr",
  "support.function",
  "support.class.component"
];

let attentionSeekers = [
  "comment",
  "keyword.other.debugger",
  "keyword.other.important",
  "variable.language.this",
  "variable.other.jsdoc"
];

/**
 * Tokens that somehow have been overridden by other settings and therefore
 * need to reset.
 */
let defaults = [
  "constant.language.import-export-all",
  "entity.name.function.tagged-template",
  "meta.function-call.arguments",
  "keyword.control.flow",
  "keyword.control.loop",
  "keyword.operator.assignment",
  "meta.array.literal",
  "meta.arrow",
  "meta.brace.round",
  "meta.definition.variable",
  "meta.function.expression",
  "meta.object-literal.key",
  "meta.objectliteral",
  "meta.parameters",
  "meta.template.expression",
  "keyword.operator.new",
  "punctuation.accessor",
  "punctuation.separator.comma",
  "support.class",
  "support.constant",
  "support.function.builtin.python",
  "support.type.property-name.css",
  "support.variable",
  "variable.language.arguments",
  "variable.other.constant.property",
  "variable.other.constant",
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

  nonEssentialColor,
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
      ...nonEssentials.map(tokenColor(nonEssentialColor)),
      ...literals.map(tokenColor(literalColor)),
      ...attentionSeekers.map(tokenColor(attentionColor)),
      ...operators.map(tokenColor(operatorColor)),
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
