require(['config'],function(){
	require(['jquery', 'gamesPage','barrier','monster','score','roleMan','button'],function($, gamesPage, barrier, monster, score, roleMan, button){
		//初始化页面
		gamesPage.init();
		//初始化任务角色
		roleMan.init();
		//按钮初始化
		button.init();
	})
})