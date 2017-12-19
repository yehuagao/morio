define(['jquery'],function($){
	//页面按钮
	var btn = {
		pageEl: $('.page'),
		btnBox: `<div class="btn-box-handle">
			<span class="up-btn">u</span>
			<span class="down-btn">d</span>
			<span class="left-btn">l</span>
			<span class="right-btn">r</span>
		</div>`,
		tap: function(){
			$('.btn-box-handle').on('click', 'span', function(){
				switch(this.className){
					case 'up-btn':
						$('#man').addClass('upActive')
						break;
					case 'down-btn':
						
						break;
					case 'left-btn':
						$('#man').css({left:$('#man').offset().left - 10 + 'px'})
						break;
					case 'right-btn':
						$('#man').css({left:$('#man').offset().left + 10 + 'px'})
						break;
				}
			})
			var interval;
			$('.btn-box-handle').on('touchstart', 'span', function(event){
				console.log('触摸')
				interval = setInterval(function(){
					switch(this.className){
						case 'left-btn':
							$('#man').css({left:$('#man').offset().left - 2 + 'px'})
							break;
						case 'right-btn':
							$('#man').css({left:$('#man').offset().left + 2 + 'px'})
							break;
					}
				}, 1)
			})

			//长按结束时
			$('.btn-box-handle').on('touchend', 'span', function(){
				clearInterval(interval);
			})
		},
		init: function() {
			this.pageEl.append(this.btnBox);
			this.tap();
		}
	}
	return btn;
})