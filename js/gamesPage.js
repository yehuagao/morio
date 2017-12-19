define(['jquery'],function($){
	/*
		界面对象
			属性： 背景（蓝色，绿色，黄色）
			元素： 人物活动范围
	*/
	var page = {
		el: $('.page'),//整体
		roleBox: '<div class="roleBox"></div>',
		init: function() {
			this.el.append(this.roleBox);
		}
	}
	return page;
})