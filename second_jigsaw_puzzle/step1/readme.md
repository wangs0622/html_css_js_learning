# 介绍

这两个文件是拼图游戏的第一步，现做一个静态的样子，其中 HTML 文件是基本的网页源代码，比较简单。其中各元素的样式在 test.css 文件中定义。

# 简略介绍

	div#contain
		{
			position: relative;
			width:650px;
			height: 450px;
			margin: 5% auto;
			border: 1px solid #fcc;
		}

确定总的包含大框的位置以及长宽高，其边框为 1px 宽的实线。

---

	div#game
		{
			position: absolute;
			background-color: green;
			width: 450px;
			height: 450px;
			top: 0px;
			left: 0px;
		}

定义游戏区域的宽高，背景色为绿色，位于大框的 0px 0px 处。

---

	div#game div
		{
			position: absolute;
			width: 149px;
			height: 149px;
			background: purple;
			color: #ffffff;
			display: inline-block;	
			border-right: 1px #ffc solid;
			border-bottom: 1px #ffc solid;
			text-align: center;
			font-size: 140px;
			border-radius: 2px;
			box-shadow: 1px 1px 1px #ffc;
			line-height: 140px;
			cursor: pointer;
		}

定义每个数字框的宽高，背景色为紫色，字体颜色为白色，显示的方式是 inline-block，画出每个数字框下边和右边的边界。其中的数字文字居中，字体大小为 140px，字体行高 140px。 `cursor: pointer` 表示当鼠标放于字体框的时候，变为手型。

---

	div#game div:hover, div#last div:hover
		{
			color: #f66;
		}

当鼠标位于字体框的时候，字体变色。
