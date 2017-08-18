# Introduction

This is my study botebook about HTML&CSS&js.

这是我的 HTML&CSS&js 学习笔记。

---

First I download the html file and css file from [http://www.w3school.com.cn](http://www.w3school.com.cn); those files this saved as "w3school.html" and "c5.css".Then I copy teo files and named as "w3school-withnotes.html" and "c5-withnote.css". In the files with notes, I will write my opinion on each sectence. So in the files "w3school-withnotes.html" and "c5-withnote.css", there would be many places that offend against the rules of grammar. But don't care it, those two files is used to read not to run.

首先就是下载网页的源代码，保存为了 "w3school.html" 和 "c5.css"。然后 copy 一份，命名为 "w3school-withnotes.html" 和 "c5-withnote.css"。在复制的文件中，我在每行下写下自己的注释。所有在这两个文件中会有很多的地方不符合语法规则，不过不要紧，毕竟这两个文件是用来看的，不是用来运行的。

# 2017-8-18 study notes

Today I continue to read the c5.css file and understand the content of CSS. I can understand how the website is make their layout.  

今天呢，在继续阅读 css 文件源码的基础上，去理解 css 知识，看懂了这个网站是如何进行大致的布局的。


对于网站中间的三列，即左侧的导航栏，中间的内容和右侧的导航栏，其在 html 文件中都以 div 的形式存在，其 id 分别是： navsecond 、 maincontent 、 sidebar。 在 css 文件中，为这个三个 div 分别设置了各自的宽度，然后以 `float:left` 的形式将这个三个 div 块进行从左到右的浮动，即对其进行了布局。