# Introduction

在 `step1` 中已经初步完成了页面的布局问题，下面就是编写 JavaScript 文件来定义如何去移动元素的问题了。参考了源代码，发现其中移动元素的的语句是：

	document.getElementById(id).style.left = "100px"
	document.getElementById(id).style.top = "100px"

参考： [http://www.w3school.com.cn/jsref/prop_style_left.asp](http://www.w3school.com.cn/jsref/prop_style_left.asp)

# 一个小测试

为了简单的实现以下如何移动的问题，编译一个简单的 js 文件，其内容如下：

	function move(id)
	{
		document.getElementById("d8").style.left = "300px";
		document.getElementById("d8").style.top = "300px";
	}

即将 id="d8" 的那个块移动到 (300px, 300px) 处。

同时修改 test.html 文件，添加此 js 文件（添加中间的那句话）。

	<link rel="stylesheet" type="text/css" href="test.css">
	<script type="text/javascript" src="test.js"></script>
	<title>GAME</title>

这个时候使用浏览器打开 HTML 文件。 点击 `8` 会看到其向右移动。为了使移动不那么的迅速，增加点动画的效果，可以修改 test.css 文件，在 `div#game div` 下添加一句话：

	-webkit-transition: 0.3s;

参考： [http://www.w3school.com.cn/css3/css3_transition.asp](http://www.w3school.com.cn/css3/css3_transition.asp)。 在源代码中，原作者有具体的注释，可以参考。 

# 编写部分完整的 test.js 文件

具体代码和注释看 test.js 

目前的功能为： 可以按 重置 按钮来随机排布各个数字框的位置，然后点击数字框的时候可以移动之。

# 接下来的任务

1. 当排序好后， `9` 这个框会自动归位，并显示祝贺成功。
2. 添加计时功能和 开始、暂停 功能。

