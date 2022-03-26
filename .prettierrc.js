module.exports = {
  semi: false, // 不使用分号
  trailingComma: 'es5', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
  useTabs: false, // 关闭tab缩进
  tabWidth: 2, // 缩进字节数量
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
}
