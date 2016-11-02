
$(function() {

	var setNewStep = true;

	var overOn = function(){
		$('.overlay').fadeIn();
	};

	var overOff = function() {
		$('.overlay').fadeOut();
	};

	var closeAll = function() {
		$('[id *= slideover]').removeClass('opened');
		$(".close-x").hide();
	};

	$('*[data-slideover="close"]').click(function() {
		closeAll();
		overOff();
	});

	var setSlideoverHeight = function() {
		$('.slideover').css('min-height', $(document).height());
	};

	setSlideoverHeight();

	$('[data-slideover="openWelcome"]').click(function(e) {
		e.preventDefault();
		closeAll();
		overOn();
		setSlideoverHeight();
		$('#slideover1').addClass('opened').find('.close-x').show();
	});

	$('[data-slideover="open2"]').click(function(e) { // click to trigger2
		e.preventDefault();
		closeAll();
		overOn();
		setSlideoverHeight();
		$('#slideover2').addClass('opened').find('.close-x').show();
		SigmaSoftware.initCharts();
		if (setNewStep) {
			StepsModule.setNextStep(2);
		}
	});


	$('[data-trans="toDetails"]').click(function(e) {  // click to wine area
		e.preventDefault();
		$('.site-img').hide();
		$('.site-img-details').show();
		setSlideoverHeight();

		$('.nav-tabs li').removeClass('active');
		$('.tab-pane').removeClass('active');

		$('.nav-tabs li.c-menu__offer').addClass('active');
		$('#panelOffer').addClass('active');
		StepsModule.setNextStep(3);
		setTimeout(function () {
			var slideIsOpened = $('#slideover1').hasClass('opened') || $('#slideover2').hasClass('opened');
			if(!slideIsOpened) {
				SigmaSoftware.initRoundChart();
				setNewStep = false;
				$('[data-slideover="open2"]').trigger('click');
			}
		}, 3000);

	});

	setTimeout(function () {
		var slideIsOpened = $('#slideover1').hasClass('opened') || $('#slideover2').hasClass('opened');
		if(!slideIsOpened) {
			$('[data-slideover="openWelcome"]').trigger('click');
		}
	}, 3000);


	$('.c-menu-chat').click(function(){     // show animated chat panel messages
		setTimeout(function () {
			$('.chat-panel-feed').addClass('show1');
		}, 200);
		setTimeout(function () {
			$('#replyText').show(700);
		}, 500);
	});

	$('.nav-tabs li:not(.c-menu-chat)').click(function(){  // hide chat panel on click elsewhere in menu
		$('.chat-panel-feed').removeClass('show1').removeClass('show2');
		$('#replyText').hide();
	});

	$('#sendMsg').click(function(){
		$('#replyText').hide();
		$('.chat-panel-feed').addClass('show2');
	});


	$('.c-menu-todo').click(function(){     // show animated todopanel
		setTimeout(function () {
			$('.todo-list-panel').addClass('showTodo');
		}, 200);
	});

	$('.nav-tabs li:not(.c-menu-todo)').click(function(){  // hide todopanel on click elsewhere in menu
		$('.todo-list-panel').removeClass('showTodo');
	});

	$('.rewards-item').popover();

});