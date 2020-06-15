(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{501:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jmh-应用指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmh-应用指南"}},[t._v("#")]),t._v(" JMH 应用指南")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("h3",{attrs:{id:"什么是-jmh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jmh"}},[t._v("#")]),t._v(" 什么是 JMH")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://openjdk.java.net/projects/code-tools/jmh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JMH"),s("OutboundLink")],1),t._v(" 即 Java Microbenchmark Harness，这是专门用于进行代码的微基准测试的一套工具 API。")]),t._v(" "),s("p",[t._v("JMH 由 OpenJDK/Oracle 里面那群开发了 Java 编译器的大牛们所开发 。何谓 Micro Benchmark 呢？ 简单地说就是在 method 层面上的 benchmark，精度可以精确到 "),s("strong",[t._v("微秒级")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"为什么需要-jmh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-jmh"}},[t._v("#")]),t._v(" 为什么需要 JMH")]),t._v(" "),s("h4",{attrs:{id:"死码消除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#死码消除"}},[t._v("#")]),t._v(" 死码消除")]),t._v(" "),s("p",[t._v("所谓死码，是指注释的代码，不可达的代码块，可达但不被使用的代码等等 。")]),t._v(" "),s("h4",{attrs:{id:"常量折叠与常量传播"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常量折叠与常量传播"}},[t._v("#")]),t._v(" 常量折叠与常量传播")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%B8%B8%E6%95%B8%E6%8A%98%E7%96%8A#%E5%B8%B8%E6%95%B8%E5%82%B3%E6%92%AD",target:"_blank",rel:"noopener noreferrer"}},[t._v("常量折叠"),s("OutboundLink")],1),t._v(" (Constant folding) 是一个在编译时期简化常数的一个过程，常数在表示式中仅仅代表一个简单的数值，就像是整数 "),s("code",[t._v("2")]),t._v("，若是一个变数从未被修改也可作为常数，或者直接将一个变数被明确地被标注为常数，例如下面的描述：")]),t._v(" "),s("h3",{attrs:{id:"jmh-的注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmh-的注意点"}},[t._v("#")]),t._v(" JMH 的注意点")]),t._v(" "),s("ul",[s("li",[t._v("测试前需要预热。")]),t._v(" "),s("li",[t._v("防止无用代码进入测试方法中。")]),t._v(" "),s("li",[t._v("并发测试。")]),t._v(" "),s("li",[t._v("测试结果呈现。")])]),t._v(" "),s("h3",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),s("ol",[s("li",[t._v("当你已经找出了热点函数，而需要对热点函数进行进一步的优化时，就可以使用 JMH 对优化的效果进行定量的分析。")]),t._v(" "),s("li",[t._v("想定量地知道某个函数需要执行多长时间，以及执行时间和输入 n 的相关性")]),t._v(" "),s("li",[t._v("一个函数有两种不同实现（例如 JSON 序列化/反序列化有 Jackson 和 Gson 实现），不知道哪种实现性能更好")])]),t._v(" "),s("h3",{attrs:{id:"jmh-概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmh-概念"}},[t._v("#")]),t._v(" JMH 概念")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Iteration")]),t._v(" - iteration 是 JMH 进行测试的最小单位，包含一组 invocations。")]),t._v(" "),s("li",[s("code",[t._v("Invocation")]),t._v(" - 一次 benchmark 方法调用。")]),t._v(" "),s("li",[s("code",[t._v("Operation")]),t._v(" - benchmark 方法中，被测量操作的执行。如果被测试的操作在 benchmark 方法中循环执行，可以使用"),s("code",[t._v("@OperationsPerInvocation")]),t._v("表明循环次数，使测试结果为单次 operation 的性能。")]),t._v(" "),s("li",[s("code",[t._v("Warmup")]),t._v(" - 在实际进行 benchmark 前先进行预热。因为某个函数被调用多次之后，JIT 会对其进行编译，通过预热可以使测量结果更加接近真实情况。")])]),t._v(" "),s("h2",{attrs:{id:"快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),s("h3",{attrs:{id:"添加-maven-依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-maven-依赖"}},[t._v("#")]),t._v(" 添加 maven 依赖")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.openjdk.jmh"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jmh-core"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${jmh.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.openjdk.jmh"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jmh-generator-annprocess"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${jmh.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("provided"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"测试代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试代码"}},[t._v("#")]),t._v(" 测试代码")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openjdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openjdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concurrent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@BenchmarkMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throughput")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Warmup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Measurement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeUnit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Threads")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Fork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@OutputTimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MILLISECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilderBenchmark")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Benchmark")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testStringAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// System.out.println(a);")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Benchmark")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testStringBuilderAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" sb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// System.out.println(sb.toString());")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RunnerException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Options")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OptionsBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilderBenchmark")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSimpleName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d:/Benchmark.log"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"执行-jmh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行-jmh"}},[t._v("#")]),t._v(" 执行 JMH")]),t._v(" "),s("h4",{attrs:{id:"命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[t._v("#")]),t._v(" 命令行")]),t._v(" "),s("p",[t._v("（1）初始化 "),s("strong",[t._v("benchmarking")]),t._v(" 工程")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ mvn archetype:generate \\\n          -DinteractiveMode=false \\\n          -DarchetypeGroupId=org.openjdk.jmh \\\n          -DarchetypeArtifactId=jmh-java-benchmark-archetype \\\n          -DgroupId=org.sample \\\n          -DartifactId=test \\\n          -Dversion=1.0\n")])])]),s("p",[t._v("（2）构建 benchmark")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd test/\nmvn clean install\n")])])]),s("p",[t._v("（3）运行 benchmark")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("java -jar target/benchmarks.jar\n")])])]),s("h4",{attrs:{id:"执行-main-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行-main-方法"}},[t._v("#")]),t._v(" 执行 main 方法")]),t._v(" "),s("p",[t._v("执行 main 方法，耐心等待测试结果，最终会生成一个测试报告，内容大致如下；")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# JMH version: 1.22\n# VM version: JDK 1.8.0_181, Java HotSpot(TM) 64-Bit Server VM, 25.181-b13\n# VM invoker: C:\\Program Files\\Java\\jdk1.8.0_181\\jre\\bin\\java.exe\n# VM options: -javaagent:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\lib\\idea_rt.jar=58635:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\bin -Dfile.encoding=UTF-8\n# Warmup: 3 iterations, 10 s each\n# Measurement: 10 iterations, 5 s each\n# Timeout: 10 min per iteration\n# Threads: 8 threads, will synchronize iterations\n# Benchmark mode: Throughput, ops/time\n# Benchmark: io.github.dunwu.javatech.jmh.StringBuilderBenchmark.testStringAdd\n\n# Run progress: 0.00% complete, ETA 00:05:20\n# Fork: 1 of 2\n# Warmup Iteration   1: 21803.050 ops/ms\n# Warmup Iteration   2: 22501.860 ops/ms\n# Warmup Iteration   3: 20953.944 ops/ms\nIteration   1: 21627.645 ops/ms\nIteration   2: 21215.269 ops/ms\nIteration   3: 20863.282 ops/ms\nIteration   4: 21617.715 ops/ms\nIteration   5: 21695.645 ops/ms\nIteration   6: 21886.784 ops/ms\nIteration   7: 21986.899 ops/ms\nIteration   8: 22389.540 ops/ms\nIteration   9: 22507.313 ops/ms\nIteration  10: 22124.133 ops/ms\n\n# Run progress: 25.00% complete, ETA 00:04:02\n# Fork: 2 of 2\n# Warmup Iteration   1: 22262.108 ops/ms\n# Warmup Iteration   2: 21567.804 ops/ms\n# Warmup Iteration   3: 21787.002 ops/ms\nIteration   1: 21598.970 ops/ms\nIteration   2: 22486.133 ops/ms\nIteration   3: 22157.834 ops/ms\nIteration   4: 22321.827 ops/ms\nIteration   5: 22477.063 ops/ms\nIteration   6: 22154.760 ops/ms\nIteration   7: 21561.095 ops/ms\nIteration   8: 22194.863 ops/ms\nIteration   9: 22493.844 ops/ms\nIteration  10: 22568.078 ops/ms\n\n\nResult "io.github.dunwu.javatech.jmh.StringBuilderBenchmark.testStringAdd":\n  21996.435 ±(99.9%) 412.955 ops/ms [Average]\n  (min, avg, max) = (20863.282, 21996.435, 22568.078), stdev = 475.560\n  CI (99.9%): [21583.480, 22409.390] (assumes normal distribution)\n\n\n# JMH version: 1.22\n# VM version: JDK 1.8.0_181, Java HotSpot(TM) 64-Bit Server VM, 25.181-b13\n# VM invoker: C:\\Program Files\\Java\\jdk1.8.0_181\\jre\\bin\\java.exe\n# VM options: -javaagent:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\lib\\idea_rt.jar=58635:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\bin -Dfile.encoding=UTF-8\n# Warmup: 3 iterations, 10 s each\n# Measurement: 10 iterations, 5 s each\n# Timeout: 10 min per iteration\n# Threads: 8 threads, will synchronize iterations\n# Benchmark mode: Throughput, ops/time\n# Benchmark: io.github.dunwu.javatech.jmh.StringBuilderBenchmark.testStringBuilderAdd\n\n# Run progress: 50.00% complete, ETA 00:02:41\n# Fork: 1 of 2\n# Warmup Iteration   1: 241500.886 ops/ms\n# Warmup Iteration   2: 134206.032 ops/ms\n# Warmup Iteration   3: 86907.846 ops/ms\nIteration   1: 86143.339 ops/ms\nIteration   2: 74725.356 ops/ms\nIteration   3: 72316.121 ops/ms\nIteration   4: 77319.716 ops/ms\nIteration   5: 83469.256 ops/ms\nIteration   6: 87712.360 ops/ms\nIteration   7: 79421.899 ops/ms\nIteration   8: 80867.839 ops/ms\nIteration   9: 82619.163 ops/ms\nIteration  10: 87026.928 ops/ms\n\n# Run progress: 75.00% complete, ETA 00:01:20\n# Fork: 2 of 2\n# Warmup Iteration   1: 228342.337 ops/ms\n# Warmup Iteration   2: 124737.248 ops/ms\n# Warmup Iteration   3: 82598.851 ops/ms\nIteration   1: 86877.318 ops/ms\nIteration   2: 89388.624 ops/ms\nIteration   3: 88523.558 ops/ms\nIteration   4: 87547.332 ops/ms\nIteration   5: 88376.087 ops/ms\nIteration   6: 88848.837 ops/ms\nIteration   7: 85998.124 ops/ms\nIteration   8: 86796.998 ops/ms\nIteration   9: 87994.726 ops/ms\nIteration  10: 87784.453 ops/ms\n\n\nResult "io.github.dunwu.javatech.jmh.StringBuilderBenchmark.testStringBuilderAdd":\n  84487.902 ±(99.9%) 4355.525 ops/ms [Average]\n  (min, avg, max) = (72316.121, 84487.902, 89388.624), stdev = 5015.829\n  CI (99.9%): [80132.377, 88843.427] (assumes normal distribution)\n\n\n# Run complete. Total time: 00:05:23\n\nREMEMBER: The numbers below are just data. To gain reusable insights, you need to follow up on\nwhy the numbers are the way they are. Use profilers (see -prof, -lprof), design factorial\nexperiments, perform baseline and negative tests that provide experimental control, make sure\nthe benchmarking environment is safe on JVM/OS/HW level, ask for reviews from the domain experts.\nDo not assume the numbers tell you what you want them to tell.\n\nBenchmark                                     Mode  Cnt      Score      Error   Units\nStringBuilderBenchmark.testStringAdd         thrpt   20  21996.435 ±  412.955  ops/ms\nStringBuilderBenchmark.testStringBuilderAdd  thrpt   20  84487.902 ± 4355.525  ops/ms\n')])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("下面来了解一下 jmh 常用 API")]),t._v(" "),s("h3",{attrs:{id:"benchmarkmode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benchmarkmode"}},[t._v("#")]),t._v(" @BenchmarkMode")]),t._v(" "),s("p",[t._v("基准测试类型。这里选择的是 "),s("code",[t._v("Throughput")]),t._v(" 也就是吞吐量。根据源码点进去，每种类型后面都有对应的解释，比较好理解，吞吐量会得到单位时间内可以进行的操作数。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Throughput")]),t._v(" - 整体吞吐量，例如“1 秒内可以执行多少次调用”。")]),t._v(" "),s("li",[s("code",[t._v("AverageTime")]),t._v(" - 调用的平均时间，例如“每次调用平均耗时 xxx 毫秒”。")]),t._v(" "),s("li",[s("code",[t._v("SampleTime")]),t._v(" - 随机取样，最后输出取样结果的分布，例如“99%的调用在 xxx 毫秒以内，99.99%的调用在 xxx 毫秒以内”")]),t._v(" "),s("li",[s("code",[t._v("SingleShotTime")]),t._v(" - 以上模式都是默认一次 iteration 是 1s，唯有 SingleShotTime 是只运行一次。往往同时把 warmup 次数设为 0，用于测试冷启动时的性能。")]),t._v(" "),s("li",[s("code",[t._v("All")]),t._v(" - 所有模式")])]),t._v(" "),s("h3",{attrs:{id:"warmup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#warmup"}},[t._v("#")]),t._v(" @Warmup")]),t._v(" "),s("p",[t._v("上面我们提到了，进行基准测试前需要进行预热。一般我们前几次进行程序测试的时候都会比较慢， 所以要让程序进行几轮预热，保证测试的准确性。其中的参数 iterations 也就非常好理解了，就是预热轮数。")]),t._v(" "),s("p",[t._v("为什么需要预热？因为 JVM 的 JIT 机制的存在，如果某个函数被调用多次之后，JVM 会尝试将其编译成为机器码从而提高执行速度。所以为了让 benchmark 的结果更加接近真实情况就需要进行预热。")]),t._v(" "),s("h3",{attrs:{id:"measurement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#measurement"}},[t._v("#")]),t._v(" @Measurement")]),t._v(" "),s("p",[t._v("度量，其实就是一些基本的测试参数。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("iterations")]),t._v(" - 进行测试的轮次")]),t._v(" "),s("li",[s("code",[t._v("time")]),t._v(" - 每轮进行的时长")]),t._v(" "),s("li",[s("code",[t._v("timeUnit")]),t._v(" - 时长单位")])]),t._v(" "),s("p",[t._v("都是一些基本的参数，可以根据具体情况调整。一般比较重的东西可以进行大量的测试，放到服务器上运行。")]),t._v(" "),s("h3",{attrs:{id:"threads"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threads"}},[t._v("#")]),t._v(" @Threads")]),t._v(" "),s("p",[t._v("每个进程中的测试线程，这个非常好理解，根据具体情况选择，一般为 cpu 乘以 2。")]),t._v(" "),s("h3",{attrs:{id:"fork"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fork"}},[t._v("#")]),t._v(" @Fork")]),t._v(" "),s("p",[t._v("进行 fork 的次数。如果 fork 数是 2 的话，则 JMH 会 fork 出两个进程来进行测试。")]),t._v(" "),s("h3",{attrs:{id:"outputtimeunit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputtimeunit"}},[t._v("#")]),t._v(" @OutputTimeUnit")]),t._v(" "),s("p",[t._v("这个比较简单了，基准测试结果的时间类型。一般选择秒、毫秒、微秒。")]),t._v(" "),s("h3",{attrs:{id:"benchmark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benchmark"}},[t._v("#")]),t._v(" @Benchmark")]),t._v(" "),s("p",[t._v("方法级注解，表示该方法是需要进行 benchmark 的对象，用法和 JUnit 的 @Test 类似。")]),t._v(" "),s("h3",{attrs:{id:"param"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#param"}},[t._v("#")]),t._v(" @Param")]),t._v(" "),s("p",[t._v("属性级注解，@Param 可以用来指定某项参数的多种情况。特别适合用来测试一个函数在不同的参数输入的情况下的性能。")]),t._v(" "),s("h3",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" @Setup")]),t._v(" "),s("p",[t._v("方法级注解，这个注解的作用就是我们需要在测试之前进行一些准备工作，比如对一些数据的初始化之类的。")]),t._v(" "),s("h3",{attrs:{id:"teardown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teardown"}},[t._v("#")]),t._v(" @TearDown")]),t._v(" "),s("p",[t._v("方法级注解，这个注解的作用就是我们需要在测试之后进行一些结束工作，比如关闭线程池，数据库连接等的，主要用于资源的回收等。")]),t._v(" "),s("h3",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" @State")]),t._v(" "),s("p",[t._v("当使用 @Setup 参数的时候，必须在类上加这个参数，不然会提示无法运行。")]),t._v(" "),s("p",[t._v("State 用于声明某个类是一个“状态”，然后接受一个 Scope 参数用来表示该状态的共享范围。 因为很多 benchmark 会需要一些表示状态的类，JMH 允许你把这些类以依赖注入的方式注入到 benchmark 函数里。Scope 主要分为三种。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Thread")]),t._v(" - 该状态为每个线程独享。")]),t._v(" "),s("li",[s("code",[t._v("Group")]),t._v(" - 该状态为同一个组里面所有线程共享。")]),t._v(" "),s("li",[s("code",[t._v("Benchmark")]),t._v(" - 该状态在所有线程间共享。")])]),t._v(" "),s("p",[t._v("关于 State 的用法，官方的 code sample 里有比较好的"),s("a",{attrs:{href:"http://hg.openjdk.java.net/code-tools/jmh/file/cb9aa824b55a/jmh-samples/src/main/java/org/openjdk/jmh/samples/JMHSample_03_States.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("例子"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://hg.openjdk.java.net/code-tools/jmh/file/tip/jmh-samples/src/main/java/org/openjdk/jmh/samples/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jmh 官方示例"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.xncoding.com/2018/01/07/java/jmh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 微基准测试框架 JMH"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnkirito.moe/java-jmh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAVA 拾遗 — JMH 与 8 个测试陷阱"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);