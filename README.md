# vue-vueRouter-note-Firebase-mobile


一个基于vue.js和Firebase制作的笔记spa（mobile端）<br/>
UI库使用light7，页面切换使用vue-router。 

目前此APP已经可以实现标签分类、笔记添加、删除等基本功能，同时通过Firebase实现了与PC版的数据同步，使app数据在mobile和pc之间无缝接合。 

页面之间的切换使用了vue-router同时使用了vue-router的过场动画效果，UI库使用light7，同时使用了popup、swipout组件，增加了本app不少体验。


[demo预览](http://geocld.github.io/demo/mobile-note/index.html)

最好在手机端查看使用本app，扫如下二维码即可进入项目在线地址： 

![](http://i.imgur.com/QR5O8PF.png)

#项目安装

1、安装依赖

	npm install

2、运行开发版项目

	npm run dev

3、发布项目

	npm run build
  
#Release change
	1.新增论坛页面。
	2.页面样式修改。