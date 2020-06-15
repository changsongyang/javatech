(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{481:function(e,t,r){"use strict";r.r(t);var _=r(14),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"freemark-cheat-sheet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#freemark-cheat-sheet"}},[e._v("#")]),e._v(" Freemark Cheat Sheet")]),e._v(" "),r("blockquote",[r("p",[e._v("FreeMarker 是一款模板引擎： 即一种基于模板和要改变的数据， 并用来生成输出文本(HTML 网页，电子邮件，配置文件，源代码等)的通用工具。 它不是面向最终用户的，而是一个 Java 类库，是一款程序员可以嵌入他们所开发产品的组件。")])]),e._v(" "),r("h2",{attrs:{id:"freemark-简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#freemark-简介"}},[e._v("#")]),e._v(" Freemark 简介")]),e._v(" "),r("p",[e._v("Freemark 模板编写为 FreeMarker Template Language (FTL)。它是简单的，专用的语言， "),r("em",[e._v("不是")]),e._v(" 像 PHP 那样成熟的编程语言。在模板中，你可以专注于如何展现数据， 而在模板之外可以专注于要展示什么数据。")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://freemarker.foofun.cn/figures/overview.png",alt:"img"}})]),e._v(" "),r("p",[e._v("这种方式通常被称为 "),r("a",{attrs:{href:"http://freemarker.foofun.cn/gloss.html#gloss.MVC",target:"_blank",rel:"noopener noreferrer"}},[e._v("MVC (模型 视图 控制器) 模式"),r("OutboundLink")],1),e._v("，对于动态网页来说，是一种特别流行的模式。 它帮助从开发人员(Java 程序员)中分离出网页设计师(HTML 设计师)。设计师无需面对模板中的复杂逻辑， 在没有程序员来修改或重新编译代码时，也可以修改页面的样式。")]),e._v(" "),r("p",[e._v("Freemark 模板一句话概括就是：***"),r("code",[e._v("模板 + 数据模型 = 输出")]),e._v("***")]),e._v(" "),r("h2",{attrs:{id:"总体结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总体结构"}},[e._v("#")]),e._v(" 总体结构")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("文本")]),e._v("：文本会照着原样来输出。")]),e._v(" "),r("li",[r("strong",[e._v("插值")]),e._v("：这部分的输出会被计算的值来替换。插值由 "),r("code",[e._v("${")]),e._v(" and "),r("code",[e._v("}")]),e._v(" 所分隔(或者 "),r("code",[e._v("#{")]),e._v(" and "),r("code",[e._v("}")]),e._v("，这种风格已经不建议再使用了；"),r("a",{attrs:{href:"http://freemarker.foofun.cn/ref_depr_numerical_interpolation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看更多"),r("OutboundLink")],1),e._v(")。")]),e._v(" "),r("li",[r("strong",[e._v("FTL 标签")]),e._v("：FTL 标签和 HTML 标签很相似，但是它们却是给 FreeMarker 的指示， 而且不会打印在输出内容中。")]),e._v(" "),r("li",[r("strong",[e._v("注释")]),e._v("：注释和 HTML 的注释也很相似，但它们是由 "),r("code",[e._v("<#--")]),e._v(" 和 "),r("code",[e._v("--\x3e")]),e._v("来分隔的。注释会被 FreeMarker 直接忽略， 更不会在输出内容中显示。")])]),e._v(" "),r("p",[r("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/ftl-template.png",alt:"img"}})]),e._v(" "),r("blockquote",[r("p",[e._v("🔔 注意：")]),e._v(" "),r("ul",[r("li",[e._v("FTL 是区分大小写的。")]),e._v(" "),r("li",[r("code",[e._v("插值")]),e._v(" 仅仅可以在 "),r("code",[e._v("文本")]),e._v(" 中使用。")]),e._v(" "),r("li",[r("code",[e._v("FTL 标签")]),e._v(" 不可以在其他 "),r("code",[e._v("FTL 标签")]),e._v(" 和 "),r("code",[e._v("插值")]),e._v(" 中使用。")]),e._v(" "),r("li",[r("code",[e._v("注释")]),e._v(" 可以放在 "),r("code",[e._v("FTL 标签")]),e._v(" 和 "),r("code",[e._v("插值")]),e._v(" 中。")])])]),e._v(" "),r("h3",{attrs:{id:"指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[e._v("#")]),e._v(" 指令")]),e._v(" "),r("p",[e._v("FTL 指令有两种类型： "),r("a",{attrs:{href:"http://freemarker.foofun.cn/gloss.html#gloss.predefinedDirective",target:"_blank",rel:"noopener noreferrer"}},[e._v("预定义指令"),r("OutboundLink")],1),e._v(" 和 "),r("a",{attrs:{href:"http://freemarker.foofun.cn/gloss.html#gloss.userDefinedDirective",target:"_blank",rel:"noopener noreferrer"}},[e._v("用户自定义指令"),r("OutboundLink")],1),e._v("。 对于用户自定义的指令使用 "),r("code",[e._v("@")]),e._v(" 来代替 "),r("code",[e._v("#")]),e._v("。")]),e._v(" "),r("blockquote",[r("p",[e._v("🔔 注意：")]),e._v(" "),r("ul",[r("li",[e._v("FreeMarker 仅仅关心 FTL 标签的嵌套而不关心 HTML 标签的嵌套。 它只会把 HTML 看做是文本，不会来解释 HTML。")]),e._v(" "),r("li",[e._v("如果你尝试使用一个不存在的指令(比如，输错了指令的名称)， FreeMarker 就会拒绝执行模板，同时抛出错误信息。")]),e._v(" "),r("li",[e._v("FreeMarker 会忽略 FTL 标签中多余的 "),r("a",{attrs:{href:"http://freemarker.foofun.cn/gloss.html#gloss.whiteSpace",target:"_blank",rel:"noopener noreferrer"}},[e._v("空白标记"),r("OutboundLink")],1),e._v("。")])])]),e._v(" "),r("h3",{attrs:{id:"表达式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表达式"}},[e._v("#")]),e._v(" 表达式")]),e._v(" "),r("p",[e._v("以下为快速浏览清单，如果需要了解更多细节，请参考"),r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("这里")]),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct",target:"_blank",rel:"noopener noreferrer"}},[e._v("直接指定值"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_string",target:"_blank",rel:"noopener noreferrer"}},[e._v("字符串"),r("OutboundLink")],1),e._v("： "),r("code",[e._v('"Foo"')]),e._v(" 或者 "),r("code",[e._v("'Foo'")]),e._v(" 或者 "),r("code",[e._v('"It\'s \\"quoted\\""')]),e._v(" 或者 "),r("code",[e._v("'It\\'s \"quoted\"'")]),e._v(" 或者 "),r("code",[e._v('r"C:\\raw\\string"')])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_number",target:"_blank",rel:"noopener noreferrer"}},[e._v("数字"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("123.45")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("布尔值"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("true")]),e._v("， "),r("code",[e._v("false")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_seuqence",target:"_blank",rel:"noopener noreferrer"}},[e._v("序列"),r("OutboundLink")],1),e._v("： "),r("code",[e._v('["foo", "bar", 123.45]')]),e._v("； 值域： "),r("code",[e._v("0..9")]),e._v(", "),r("code",[e._v("0..<10")]),e._v(" (或 "),r("code",[e._v("0..!10")]),e._v("), "),r("code",[e._v("0..")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_hash",target:"_blank",rel:"noopener noreferrer"}},[e._v("哈希表"),r("OutboundLink")],1),e._v("： "),r("code",[e._v('{"name":"green mouse", "price":150}')])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var",target:"_blank",rel:"noopener noreferrer"}},[e._v("检索变量"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_toplevel",target:"_blank",rel:"noopener noreferrer"}},[e._v("顶层变量"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("user")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_hash",target:"_blank",rel:"noopener noreferrer"}},[e._v("从哈希表中检索数据"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("user.name")]),e._v("， "),r("code",[e._v('user["name"]')])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_sequence",target:"_blank",rel:"noopener noreferrer"}},[e._v("从序列中检索数据"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("products[5]")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_special",target:"_blank",rel:"noopener noreferrer"}},[e._v("特殊变量"),r("OutboundLink")],1),e._v("： "),r("code",[e._v(".main")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop",target:"_blank",rel:"noopener noreferrer"}},[e._v("字符串操作"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop_interpolation",target:"_blank",rel:"noopener noreferrer"}},[e._v("插值(或连接)"),r("OutboundLink")],1),e._v("： "),r("code",[e._v('"Hello ${user}!"')]),e._v(" (或 "),r("code",[e._v('"Hello " + user + "!"')]),e._v(")")]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_get_character",target:"_blank",rel:"noopener noreferrer"}},[e._v("获取一个字符"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("name[0]")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop_slice",target:"_blank",rel:"noopener noreferrer"}},[e._v("字符串切分："),r("OutboundLink")],1),e._v(" 包含结尾： "),r("code",[e._v("name[0..4]")]),e._v("，不包含结尾： "),r("code",[e._v("name[0..<5]")]),e._v("，基于长度(宽容处理)： "),r("code",[e._v("name[0..*5]")]),e._v("，去除开头："),r("code",[e._v("name[5..]")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_sequenceop",target:"_blank",rel:"noopener noreferrer"}},[e._v("序列操作"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_sequenceop_cat",target:"_blank",rel:"noopener noreferrer"}},[e._v("连接"),r("OutboundLink")],1),e._v("： "),r("code",[e._v('users + ["guest"]')])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_seqenceop_slice",target:"_blank",rel:"noopener noreferrer"}},[e._v("序列切分"),r("OutboundLink")],1),e._v("：包含结尾： "),r("code",[e._v("products[20..29]")]),e._v("， 不包含结尾： "),r("code",[e._v("products[20..<30]")]),e._v("，基于长度(宽容处理)："),r("code",[e._v("products[20..*10]")]),e._v("，去除开头： "),r("code",[e._v("products[20..]")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_hashop",target:"_blank",rel:"noopener noreferrer"}},[e._v("哈希表操作"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_hashop_cat",target:"_blank",rel:"noopener noreferrer"}},[e._v("连接"),r("OutboundLink")],1),e._v("： "),r("code",[e._v('passwords + { "joe": "secret42" }')])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_arit",target:"_blank",rel:"noopener noreferrer"}},[e._v("算术运算"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("(x * 1.5 + 10) / 2 - y % 100")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_comparison",target:"_blank",rel:"noopener noreferrer"}},[e._v("比较运算"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("x == y")]),e._v("， "),r("code",[e._v("x != y")]),e._v("， "),r("code",[e._v("x < y")]),e._v("， "),r("code",[e._v("x > y")]),e._v("， "),r("code",[e._v("x >= y")]),e._v("， "),r("code",[e._v("x <= y")]),e._v("， "),r("code",[e._v("x lt y")]),e._v("， "),r("code",[e._v("x lte y")]),e._v("， "),r("code",[e._v("x gt y")]),e._v("， "),r("code",[e._v("x gte y")]),e._v("， 等等。。。。。。")]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_logicalop",target:"_blank",rel:"noopener noreferrer"}},[e._v("逻辑操作"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("!registered && (firstVisit || fromEurope)")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_builtin",target:"_blank",rel:"noopener noreferrer"}},[e._v("内建函数"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("name?upper_case")]),e._v(", "),r("code",[e._v("path?ensure_starts_with('/')")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_methodcall",target:"_blank",rel:"noopener noreferrer"}},[e._v("方法调用"),r("OutboundLink")],1),e._v("： "),r("code",[e._v('repeat("What", 3)')])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing",target:"_blank",rel:"noopener noreferrer"}},[e._v("处理不存在的值"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing_default",target:"_blank",rel:"noopener noreferrer"}},[e._v("默认值"),r("OutboundLink")],1),e._v("： "),r("code",[e._v('name!"unknown"')]),e._v(" 或者 "),r("code",[e._v('(user.name)!"unknown"')]),e._v(" 或者 "),r("code",[e._v("name!")]),e._v(" 或者 "),r("code",[e._v("(user.name)!")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing_test",target:"_blank",rel:"noopener noreferrer"}},[e._v("检测不存在的值"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("name??")]),e._v(" 或者 "),r("code",[e._v("(user.name)??")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_assignment",target:"_blank",rel:"noopener noreferrer"}},[e._v("赋值操作"),r("OutboundLink")],1),e._v("： "),r("code",[e._v("=")]),e._v(", "),r("code",[e._v("+=")]),e._v(", "),r("code",[e._v("-=")]),e._v(", "),r("code",[e._v("*=")]),e._v(", "),r("code",[e._v("/=")]),e._v(", "),r("code",[e._v("%=")]),e._v(", "),r("code",[e._v("++")]),e._v(", "),r("code",[e._v("--")])])]),e._v(" "),r("h3",{attrs:{id:"变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[e._v("#")]),e._v(" 变量")]),e._v(" "),r("p",[e._v("注意：变量 "),r("em",[e._v("仅仅")]),e._v(" 在 "),r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_overallstructure.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("文本区"),r("OutboundLink")],1),e._v(" (比如 "),r("code",[e._v("<h1>Hello ${name}!</h1>")]),e._v(") 和 "),r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_string",target:"_blank",rel:"noopener noreferrer"}},[e._v("字符串"),r("OutboundLink")],1),e._v(" 中起作用。")]),e._v(" "),r("p",[e._v("正确示例：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<#include "/footer/${company}.html">\n<#if big>...</#if>\n')])])]),r("p",[e._v("错误示例：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<#if ${big}>...</#if>\n<#if "${big}">...</#if>\n')])])]),r("h2",{attrs:{id:"数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[e._v("#")]),e._v(" 数据类型")]),e._v(" "),r("p",[e._v("Freemark 支持的类型有：")]),e._v(" "),r("h3",{attrs:{id:"标量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标量"}},[e._v("#")]),e._v(" 标量")]),e._v(" "),r("p",[e._v("字符串")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('${"Hello ${user}"}\n${"I can escape with \\\\ ${user}"}\n${r"Now I can read dollar signs $"}\n')])])]),r("p",[e._v("输出：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Hello deister\nI can escape with \\ deister\nNow I can read dollar signs $\n")])])]),r("p",[e._v("数字")]),e._v(" "),r("p",[e._v("布尔值")]),e._v(" "),r("p",[e._v("日期/时间 (日期，时间或日期时间)")]),e._v(" "),r("h3",{attrs:{id:"容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[e._v("#")]),e._v(" 容器")]),e._v(" "),r("ul",[r("li",[e._v("哈希表")]),e._v(" "),r("li",[e._v("序列")]),e._v(" "),r("li",[e._v("集合")])]),e._v(" "),r("h3",{attrs:{id:"子程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#子程序"}},[e._v("#")]),e._v(" 子程序")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_datamodel_types.html#dgui_datamodel_method",target:"_blank",rel:"noopener noreferrer"}},[e._v("方法和函数"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_datamodel_types.html#dgui_datamodel_userdefdir",target:"_blank",rel:"noopener noreferrer"}},[e._v("用户自定义指令"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"其它"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[e._v("#")]),e._v(" 其它")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/dgui_datamodel_types.html#dgui_datamodel_node",target:"_blank",rel:"noopener noreferrer"}},[e._v("结点"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"转义符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#转义符"}},[e._v("#")]),e._v(" 转义符")]),e._v(" "),r("p",[e._v("FTL 支持的所有转义字符：")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("转义序列")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("含义")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v('\\"')])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("引号 (u0022)")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\'")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("单引号(又称为撇号) (u0027)")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\{")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("起始花括号："),r("code",[e._v("{")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\\\")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("反斜杠 (u005C)")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\n")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("换行符 (u000A)")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\r")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("回车 (u000D)")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\t")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("水平制表符(又称为 tab) (u0009)")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\b")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("退格 (u0008)")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\f")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("换页 (u000C)")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\l")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("小于号："),r("code",[e._v("<")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\g")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("大于号："),r("code",[e._v(">")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\a")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("&符："),r("code",[e._v("&")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("\\xCode")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("字符的 16 进制 "),r("a",{attrs:{href:"http://freemarker.foofun.cn/gloss.html#gloss.unicode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unicode"),r("OutboundLink")],1),e._v(" 码 ("),r("a",{attrs:{href:"http://freemarker.foofun.cn/gloss.html#gloss.UCS",target:"_blank",rel:"noopener noreferrer"}},[e._v("UCS"),r("OutboundLink")],1),e._v(" 码)")])])])]),e._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/apache/freemarker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Freemark Github"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://freemarker.foofun.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Freemark 中文教程"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://try.freemarker.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线 Freemark 工具"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);