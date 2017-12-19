define(['jquery'],function($){
	//主角
	var man = {
		element: '<span class="manStyle" id="man"></span>',
		pageEl: $('.page'),
		init: function(){
			this.pageEl.append(this.element)
		}
	}
	return man;
})