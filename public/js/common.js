"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Dropzone.autoDiscover = false;
var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

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
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
	//taken from good planet
	customRange: function customRange() {
		$(".range-wrap").each(function () {
			var _this = $(this);

			var $d3 = _this.find(".slider-js");

			var slider = $d3.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: function onStart(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onChange: function onChange(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onFinish: function onFinish(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onUpdate: function onUpdate(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				}
			});
			var $d3_instance = slider.data("ionRangeSlider");
			$(this).on('change  input  cut  copy  paste', '.minus', function () {
				var th = $(this);
				var data = th.val();
				var min = +data; // th.val(data + ' т')

				console.log(1);
				$d3_instance.update({
					from: min
				});
			});
			$(this).on('change  input  cut  copy  paste', '.plus', function () {
				var th = $(this);
				var data = th.val();
				var max = +data; //max => new val of max inp
				//min => value of the min inp

				var min = Number(document.querySelector('.range-result.range-result--minus.minus').value);

				if (min >= max) {
					min = 0;
					$d3_instance.update({
						from: min,
						to: max
					});
				} else {
					$d3_instance.update({
						to: max
					});
				}
			}); // $d3.on("change", function () {
			// 	var $inp = $(this);
			// 	var from = $inp.prop("value"); // reading input value
			// 	var from2 = $inp.data("from"); // reading input data-from attribute
			// 	_this.find('range-result--minus').val(from); // FROM value
			// 	_this.find('range-result--plus').val(from); // FROM value
			// });
		});
	} //taken from good planet
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.customRange();
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/Catalog-List-1440.png);"></div>'); // /добавляет подложку для pixel perfect
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
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var defaultSl = {
		loop: true,
		loopedSlides: 5,
		//looped slides should be the same
		lazy: {
			loadPrevNext: true
		}
	};
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 0,
		slidesPerView: 'auto',
		loop: true,
		freeMode: true,
		loopedSlides: 5,
		//looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true
	});
	var galleryTop = new Swiper('.gallery-top', _objectSpread({}, defaultSl, {
		spaceBetween: 0,
		thumbs: {
			swiper: galleryThumbs
		}
	}));
	$(".sCatalog").each(function () {
		var sliderCatalog = new Swiper($(this).find(".sCatalog__slider--js"), _objectSpread({}, defaultSl, {
			spaceBetween: 30,
			slidesPerView: 'auto',
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev')
			}
		}));
	}); // cutom code

	var breadSl = new Swiper('.breadcrumb-slider-js', {
		slidesPerView: 'auto',
		// spaceBetween: 30,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30,
		watchOverflow: true
	}); //prod card breadcrumbs

	var breadSl = new Swiper('.breadcrumb-slider-js-prod-card04', {
		slidesPerView: 'auto',
		// spaceBetween: 30,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30,
		watchOverflow: true
	}); //my tabs

	function CustomTabs2(selectorsArr) {
		var _iterator = _createForOfIteratorHelper(selectorsArr),
				_step;

		try {
			var _loop = function _loop() {
				var selector = _step.value;
				var tabPills = document.querySelectorAll('[data-tab-pill="' + selector + '"]');
				var tabContent = document.querySelectorAll('[data-tab-content="' + selector + '"]');

				if (tabPills != [] && tabContent != []) {
					var _iterator2 = _createForOfIteratorHelper(tabPills),
							_step2;

					try {
						for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
							var tab = _step2.value;
							tab.addEventListener('click', function () {
								var thisTab;

								var _iterator3 = _createForOfIteratorHelper(tabPills),
										_step3;

								try {
									for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
										var _tab = _step3.value;

										_tab.classList.remove('active');
									}
								} catch (err) {
									_iterator3.e(err);
								} finally {
									_iterator3.f();
								}

								var _iterator4 = _createForOfIteratorHelper(tabContent),
										_step4;

								try {
									for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
										var contItem = _step4.value;
										contItem.classList.remove('active');

										if (contItem.getAttribute('data-tab-for') === this.getAttribute('data-tab-for')) {
											thisTab = contItem;
										}
									}
								} catch (err) {
									_iterator4.e(err);
								} finally {
									_iterator4.f();
								}

								this.classList.add('active');
								thisTab.classList.add('active');
							});
						}
					} catch (err) {
						_iterator2.e(err);
					} finally {
						_iterator2.f();
					}
				}
			};

			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				_loop();
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
	}

	CustomTabs2(['props', 'user-acc', 'change-data-forms', 'catalog-goods-display', 'foto-gallery', 'prod-descr-tabs']); // dropzone

	$("#props-dz").dropzone({
		url: "/file/post",
		dictDefaultMessage: 'Перенесите сюда файл или выберите на компьютере'
	}); //toggle user acc js

	$('.tab-content__order-item-icon').click(function () {
		//console.log();
		$(this).closest('.tab-content__order-item').toggleClass('content-visible');
	}); //sCatalogPage

	$('.sub-list-headline').click(function () {
		//$(this).closest('.has-sub-list').toggleClass('active');
		//
		$(this).next().slideToggle(function () {
			$(this).parent().toggleClass('active');
		});
	}); //customs select

	$('.sort-price-btn').click(function () {
		this.classList.toggle('collapsed');

		if (this.classList.contains('collapsed')) {
			window.setTimeout(function () {
				document.body.addEventListener('click', closeCustomSelect);
			}, 100);
		} else {
			document.body.removeEventListener('click', closeCustomSelect);
		}
	});

	function closeCustomSelect() {
		document.body.removeEventListener('click', closeCustomSelect);
		$('.sort-price-btn').removeClass('collapsed');
	}

	;
	$('.custom-select span').click(function () {
		document.querySelector('.hidden-input-custom-select').setAttribute('value', this.innerHTML);
		document.querySelector('.sort-price-btn span').innerHTML = this.innerHTML;
	}); //

	$('.toggle-chars-goods-table-js').click(function () {
		//$(this).closest('.table-sample-item').toggleClass('content-visiable');
		var selfJQ = $(this);
		var parent = this.closest('.table-sample-item');
		var hiddenBlockChar = parent.querySelector('.description-of-table-items');

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
		} else {
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
		} //console.log(hiddenBlockChar);

	}); //filter custom pop-up

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
		passive: true
	}); //
	//sActionsPage

	var actionsSlider = new Swiper('.actions-slider03', {
		// Optional parameters
		//loop: true,
		slidesPerColumnFill: 'row',
		breakpoints: {
			1: {
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1
			},
			575: {
				slidesPerColumn: 2,
				slidesPerView: 1,
				spaceBetween: 30
			},
			768: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 30
			}
		},
		lazy: {
			loadPrevNext: true
		},
		//auto
		autoplay: {
			delay: 5000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-action-next',
			prevEl: '.slider-action-prev'
		},
		//pagination
		pagination: {
			el: $(this).find('.action-slider-puging'),
			clickable: true
		}
	}); //slide timer

	function tikTak() {
		var ActionSlideTimerBlocks = document.querySelectorAll('.timer-block-js');

		var _iterator5 = _createForOfIteratorHelper(ActionSlideTimerBlocks),
				_step5;

		try {
			var _loop2 = function _loop2() {
				var timer = _step5.value;
				var now = new Date();
				var days = getTimeItem(timer, 'data-days', now.getDate());
				var hours = getTimeItem(timer, 'data-hours', now.getHours());
				var mins = getTimeItem(timer, 'data-mins', now.getMinutes());
				var secs = getTimeItem(timer, 'data-secs', now.getSeconds()); //seleting target date by given Attributes

				var targetDate = new Date(now.getFullYear(), now.getMonth(), days, hours, mins, secs); //find html els to store time items

				var daysSpan = timer.querySelector('.days-amount .num');
				var hoursSpan = timer.querySelector('.hours-amount .num');
				var minsSpan = timer.querySelector('.mins-amount .num');
				var secsSpan = timer.querySelector('.secs-amount .num');
				tikTakInterValFunc();
				var tikTakIntervalId = window.setInterval(tikTakInterValFunc, 1000);

				function tikTakInterValFunc() {
					var now = new Date();
					var timeLeft = (targetDate - now) / 1000;

					if (timeLeft < 1) {
						window.clearInterval(tikTakIntervalId); //to do something after timer ends

						$(timer).fadeOut();
					}

					daysSpan.innerHTML = Math.floor(timeLeft / 60 / 60 / 24);
					timeLeft = (timeLeft / 60 / 60 / 24 - Math.floor(timeLeft / 60 / 60 / 24)) * 60 * 60 * 24;
					hoursSpan.innerHTML = Math.floor(timeLeft / 60 / 60);
					timeLeft = (timeLeft / 60 / 60 - Math.floor(timeLeft / 60 / 60)) * 60 * 60;
					minsSpan.innerHTML = Math.floor(timeLeft / 60);
					timeLeft = (timeLeft / 60 - Math.floor(timeLeft / 60)) * 60;
					secsSpan.innerHTML = Math.floor(timeLeft);
				}
			};

			for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
				_loop2();
			}
		} catch (err) {
			_iterator5.e(err);
		} finally {
			_iterator5.f();
		}
	}

	tikTak();

	function getTimeItem(htmlEl, attributeName, currentTimeItem) {
		var timeItem = Number(htmlEl.getAttribute(attributeName));

		if (timeItem) {
			timeItem += currentTimeItem;
		} else {
			timeItem = currentTimeItem;
		}

		return timeItem;
	} //product card js


	var photoGaleryThumb = new Swiper('.foto-galery-container__image-pills-bl', {
		breakpoints: {
			1: {
				slidesPerView: 'auto',
				direction: 'horizontal',
				spaceBetween: 10
			},
			576: {
				slidesPerView: 'auto',
				direction: 'vertical',
				spaceBetween: 10
			}
		},
		//loop: true,
		on: {
			click: function click() {
				//photoGaleryThumb.slideTo(photoGaleryThumb.clickedIndex - 1, 700, false);
				photoGaleryThumb.updateSlidesClasses();
				photoGalery.updateSlidesClasses();
			}
		}
	});
	var photoGalery = new Swiper('.foto-galery-container__foto-galery-big-img', {
		thumbs: {
			swiper: photoGaleryThumb
		},
		lazy: {
			loadPrevNext: true
		},
		loop: true,
		on: {
			click: function click() {
				//photoGaleryThumb.slideTo(photoGaleryThumb.clickedIndex - 1, 700, false);
				photoGaleryThumb.updateSlidesClasses();
				photoGalery.updateSlidesClasses();
			}
		}
	}); //

	var ProdTabsSwiper = new Swiper('.product-description-pills__tabs-cont', {
		slidesPerView: 'auto',
		freeMode: true,
		freeModeMomentum: true,
		watchOverflow: true
	}); //star mark

	$('.mark-stars-item').click(function () {
		var thisIndex = $('.mark-stars-item').index(this);
		var allThis = this.parentElement.children;

		for (var i = 0; i <= thisIndex; i++) {
			allThis[i].classList.add('no-empty-star');
			allThis[i].classList.remove('empty-star');
		}

		for (var _i = thisIndex + 1; _i <= allThis.length - 1; _i++) {
			allThis[_i].classList.remove('no-empty-star');

			allThis[_i].classList.add('empty-star');
		}

		document.querySelector('.mark-holder-js').setAttribute('value', thisIndex + 1);
	});
	$('.mark-stars-item').mouseover(function () {
		var thisIndex = $('.mark-stars-item').index(this);
		var allThis = this.parentElement.children;

		for (var i = 0; i <= thisIndex; i++) {
			allThis[i].classList.add('hover-paint-js');
		}

		for (var _i2 = thisIndex + 1; _i2 <= allThis.length - 1; _i2++) {
			allThis[_i2].classList.remove('hover-paint-js');
		}
	});
	$('.mark-stars-item').mouseout(function () {
		var allThis = this.parentElement.children;

		var _iterator6 = _createForOfIteratorHelper(allThis),
				_step6;

		try {
			for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
				var star = _step6.value;
				star.classList.remove('hover-paint-js');
			}
		} catch (err) {
			_iterator6.e(err);
		} finally {
			_iterator6.f();
		}
	}); //show more btn for prod descr table in left col

	$('.product-info-lc__in-detail-btn').click(function () {
		event.preventDefault();
		this.classList.toggle('collapsed-js');
		$('.product-info-lc__char-table .detailed-chars-js').fadeToggle(function () {
			this.classList.toggle('active');
		});
	}); //smal actions slider04

	$('.actionsSlider').each(function () {
		var actionsSlider04 = new Swiper($(this).find('.actions-slider04'), {
			autoplay: {
				delay: 5000
			},
			//pagination
			pagination: {
				el: $(this).find('.action-slider-puging'),
				clickable: true
			}
		});
	}); //fixed position to buy block

	var page03 = document.querySelector('.product-card-page');

	if (page03) {
		window.addEventListener('scroll', function () {
			var bottomOfBuyBlock = $('.block-to-calculate-top-js').offset().top + $('.block-to-calculate-top-js').outerHeight();

			if (window.scrollY > bottomOfBuyBlock && window.matchMedia('(max-width: 992px)').matches) {
				$('.buy-block-04').addClass('visible');
				document.body.style.paddingBottom = $('.buy-block-04.fixed-buy-block').outerHeight() + 'px'; //console.log();
			} else {
				$('.buy-block-04').removeClass('visible');
				document.body.style.paddingBottom = '0';
			}
		}, {
			passive: true
		});
	} //06 ordering individual


	$('.order-cont__headline').click(function () {
		var headline = this;
		this.classList.toggle('opened-block');
		$(this).closest('.order-cont').find('.order-cont__items-list-box').slideToggle(function () {
			this.classList.toggle('active');
		});
	}); //11 comparsion

	var comparsionSlider = new Swiper('.comparsion-swiper-cont', {
		slidesPerView: 'auto',
		freeMode: true,
		freeModeMomentum: true,
		watchOverflow: true
	});
	/*$('.prod-item__img-wrap .icon-cross').click(function () {
		let thisSlide = this.closest('.swiper-slide');
		let allSlides = thisSlide.parentElement.querySelectorAll('.swiper-slide');
		let SlideIndex;
		for (let [index,el] of allSlides.entries()){
			if(el == thisSlide){
				SlideIndex = index;
			}
		}
		if (allSlides.length > 2) {
			comparsionSlider.removeSlide(SlideIndex);
			comparsionSlider.update();
		}
	});*/

	$("[data-dropdown]").click(function () {
		$($(this).data("dropdown")).toggleClass('active');
	});
	$(".mobile-dropdown-toggle").click(function (e) {
		e.preventDefault();
		$(this).next().addClass('active');
	});
	$(".mobile-dropdown-block__head").click(function () {
		$(this).parents(".mobile-dropdown-block").removeClass('active');
	});
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	}
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}