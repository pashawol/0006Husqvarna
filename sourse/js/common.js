Dropzone.autoDiscover = false;
const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);
				_this.closeMenu();

			});
		})
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu();

			}
		});
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
	//taken from good planet
	customRange() {
		$(".range-wrap").each(function () {
			let _this = $(this);
			var $d3 = _this.find(".slider-js");

			var slider = $d3.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: function (data) {
					_this.find('.minus').val(data.from);
					_this.find('.plus').val(data.to);
				},
				onChange: function (data) {
					_this.find('.minus').val(data.from);
					_this.find('.plus').val(data.to);
				},
				onFinish: function (data) {
					_this.find('.minus').val(data.from);
					_this.find('.plus').val(data.to);
				},
				onUpdate: function (data) {
					_this.find('.minus').val(data.from);
					_this.find('.plus').val(data.to);
				}
			});
			var $d3_instance = slider.data("ionRangeSlider");
			$(this).on('change  input  cut  copy  paste', '.minus', function () {
				var th = $(this);
				var data = th.val();
				var min = +data;
				// th.val(data + ' т')
				console.log(1);
				$d3_instance.update({
					from: min,
				})
			});

			$(this).on('change  input  cut  copy  paste', '.plus', function () {
				var th = $(this);
				var data = th.val();
				var max = +data;

				//max => new val of max inp
				//min => value of the min inp

				let min = Number(document.querySelector('.range-result.range-result--minus.minus').value);
				if (min >= max) {
					min = 0;
					$d3_instance.update({
						from: min,
						to: max,
					});
				}
				else {
					$d3_instance.update({
						to: max,
					});
				}
			});
			// $d3.on("change", function () {
			// 	var $inp = $(this);
			// 	var from = $inp.prop("value"); // reading input value
			// 	var from2 = $inp.data("from"); // reading input data-from attribute

			// 	_this.find('range-result--minus').val(from); // FROM value
			// 	_this.find('range-result--plus').val(from); // FROM value
			// });


		})
	},
	//taken from good planet
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.customRange();

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/Catalog-List-1440.png);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		lazy: {
			loadPrevNext: true,
		},


	}
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 0,
		slidesPerView: 'auto',
		loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	var galleryTop = new Swiper('.gallery-top', {
		...defaultSl,
		spaceBetween: 0,
		thumbs: {
			swiper: galleryThumbs,
		},
	});
	$(".sCatalog").each(function () {



		var sliderCatalog = new Swiper($(this).find(".sCatalog__slider--js"), {
			...defaultSl,

			spaceBetween: 30,
			slidesPerView: 'auto',
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev'),
			},
		});

	})
	// cutom code
	var breadSl = new Swiper('.breadcrumb-slider-js', {
		slidesPerView: 'auto',
		// spaceBetween: 30,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30,
		watchOverflow: true,
	});
	//my tabs
	function CustomTabs2(selectorsArr) {
		for (let selector of selectorsArr) {
			let tabPills = document.querySelectorAll('[data-tab-pill="' + selector + '"]');
			let tabContent = document.querySelectorAll('[data-tab-content="' + selector + '"]');
			if (tabPills != [] && tabContent != []) {
				for (let tab of tabPills) {
					tab.addEventListener('click', function () {
						let thisTab;
						for (let tab of tabPills) {
							tab.classList.remove('active');
						}
						for (let contItem of tabContent) {
							contItem.classList.remove('active');
							if (contItem.getAttribute('data-tab-for') === this.getAttribute('data-tab-for')) {
								thisTab = contItem;
							}
						}
						this.classList.add('active');
						thisTab.classList.add('active');
					});
				}
			}
		}
	}
	CustomTabs2(['props', 'user-acc', 'change-data-forms', 'catalog-goods-display']);
	// dropzone
	$("#props-dz").dropzone({
		url: "/file/post",
		dictDefaultMessage: 'Перенесите сюда файл или выберите на компьютере',
	});
	//toggle user acc js
	$('.tab-content__order-item-icon').click(function () {
		//console.log();
		$(this).closest('.tab-content__order-item').toggleClass('content-visible');
	});
	//sCatalogPage
	$('.sub-list-headline').click(function () {
		//$(this).closest('.has-sub-list').toggleClass('active');
		//
		$(this).next().slideToggle(function () {
			$(this).parent().toggleClass('active');
		});
	});


	//customs select
	$('.sort-price-btn').click(function () {
		this.classList.toggle('collapsed');
		if (this.classList.contains('collapsed')) {
			window.setTimeout(function () {
				document.body.addEventListener('click', closeCustomSelect);
			}, 100);
		}
		else {
			document.body.removeEventListener('click', closeCustomSelect);
		}
	});
	function closeCustomSelect() {
		document.body.removeEventListener('click', closeCustomSelect);
		$('.sort-price-btn').removeClass('collapsed');
	};
	$('.custom-select span').click(function () {
		document.querySelector('.hidden-input-custom-select').setAttribute('value', this.innerHTML);
		document.querySelector('.sort-price-btn span').innerHTML = this.innerHTML;
	});
	//
	$('.toggle-chars-goods-table-js').click(function () {
		//$(this).closest('.table-sample-item').toggleClass('content-visiable');
		let selfJQ = $(this);
		let parent = this.closest('.table-sample-item');
		let hiddenBlockChar = parent.querySelector('.description-of-table-items');

		if (parent.classList.contains('content-visiable')) {
			//we are closing
			//1 gives to selfJQ opacity 0 (addClass('opacity0'))
			//2 after transtion push selfJQ to the top but reveal it after transition
			selfJQ.addClass('opacity0');
			window.setTimeout(function () {
				selfJQ.removeClass('in-bottom');
				$(hiddenBlockChar).slideToggle(function () {
					$(this).closest('.table-sample-item').toggleClass('content-visiable');
					selfJQ.removeClass('opacity0');
				});
			}, 200);
		}
		else {
			//we are opening
			//1 gives to selfJQ opacity 0 (addClass('opacity0'))
			//2 after transtion spawn selfJQ in bottom (addClass('in-bottom'))  and fade it in (removeClass('opacity0'))
			selfJQ.addClass('opacity0');
			window.setTimeout(function () {
				$(hiddenBlockChar).slideToggle(function () {
					$(this).closest('.table-sample-item').toggleClass('content-visiable');
					selfJQ.addClass('in-bottom');
					selfJQ.removeClass('opacity0');

					$(parent).hide().show(0); // redraw parent block to prevent height bug
				});
			}, 200);
		}
		//console.log(hiddenBlockChar);
	});
	//filter custom pop-up
	$('.filter-bar-btns .filter-bar-btns__filter-btn').click(function () {
		$('body').addClass('stop-scrolling');
		$('.filter-bl').addClass('filter-visiable');
	});
	$('.filter-bl__back-btn').click(function () {
		closeFilterPopUp();
	});

	function closeFilterPopUp() {
		$('body').removeClass('stop-scrolling');
		$('.filter-bl').removeClass('filter-visiable');
	}
	function closeFiltersOnResize() {
		if (window.matchMedia("(min-width: 992px)").matches) {
			closeFilterPopUp();
		}
	}
	window.addEventListener('resize', closeFiltersOnResize, {
		passive: true,
	});
	//
	//sActionsPage
	let actionsSlider = new Swiper('.swiper-actions-container', {
		// Optional parameters
		//loop: true,

		slidesPerColumnFill: 'row',

		breakpoints: {
			1: {
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
			},
			575: {
				slidesPerColumn: 2,
				slidesPerView: 1,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 30,
			},
		},
		lazy: {
			loadPrevNext: true
		},
		//auto
		//autoplay: {
		//	delay: 5000,
		//},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-action-next',
			prevEl: '.slider-action-prev',
		},
		//pagination
		pagination: {
			el: $(this).find('.action-slider-puging'),
			clickable: true,
		},
	});
	//slide timer
	function tikTak() {
		let ActionSlideTimerBlocks = document.querySelectorAll('.timer-block-js');
		for (let timer of ActionSlideTimerBlocks) {
			let now = new Date();

			let days = getTimeItem(timer, 'data-days', now.getDate());
			let hours = getTimeItem(timer, 'data-hours', now.getHours());
			let mins = getTimeItem(timer, 'data-mins', now.getMinutes());
			let secs = getTimeItem(timer, 'data-secs', now.getSeconds());

			//seleting target date by given Attributes
			let targetDate = new Date(now.getFullYear(), now.getMonth(), days, hours, mins, secs);

			//find html els to store time items
			let daysSpan = timer.querySelector('.days-amount .num');
			let hoursSpan = timer.querySelector('.hours-amount .num');
			let minsSpan = timer.querySelector('.mins-amount .num');
			let secsSpan = timer.querySelector('.secs-amount .num');

			tikTakInterValFunc();
			let tikTakIntervalId = window.setInterval(tikTakInterValFunc, 1000);

			function tikTakInterValFunc() {
				let now = new Date();
				let timeLeft = (targetDate - now) / 1000;

				if (timeLeft < 1) {
					window.clearInterval(tikTakIntervalId);
					//to do something after timer ends
					$(timer).fadeOut();
				}
				daysSpan.innerHTML = Math.floor(timeLeft / 60 / 60 / 24);
				timeLeft = ((timeLeft / 60 / 60 / 24) - Math.floor(timeLeft / 60 / 60 / 24)) * 60 * 60 * 24;

				hoursSpan.innerHTML = Math.floor(timeLeft / 60 / 60);
				timeLeft = ((timeLeft / 60 / 60) - Math.floor(timeLeft / 60 / 60)) * 60 * 60;

				minsSpan.innerHTML = Math.floor((timeLeft / 60));
				timeLeft = ((timeLeft / 60) - Math.floor((timeLeft / 60))) * 60;

				secsSpan.innerHTML = Math.floor(timeLeft);
			}
		}
	}
	tikTak();
	function getTimeItem(htmlEl, attributeName, currentTimeItem) {
		let timeItem = Number(htmlEl.getAttribute(attributeName));
		if (timeItem) {
			timeItem += currentTimeItem;
		}
		else {
			timeItem = currentTimeItem;
		}
		return timeItem
	}

	//


	// $(".dropdown--js").hover(function () {

	// 	setTimeout(() => {
	// 		$(this).addClass("on");
	// 		// $(this).find(".dropdown-block").toggle();
	// 	}, 200);
	// },
	// 	function () {
	// 		$(this).removeClass("on");

	// 	})
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
