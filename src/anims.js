// import scrollMonitor from "./js/scrollMonitor.js";
import writer from "./js/typewriter.js";
import anime from 'animejs'

var maxOffset = function (bubble, decalage) {
	var offset = (decalage) ? 0 : 250;

	return Math.min($j(window).height() / 2, offset, bubble.offset().top) *(-1);
};

$j(window).on("load", function () {
	$j(".conversation--animate").each(function () {
		var $conversation = $j(this);

		$conversation.outerHeight($conversation.outerHeight())

		var tl = anime.timeline({
			autoplay: false
		});

		var tabOnViewport = [];
		var tabAnimComplete = [];

		$conversation.find(".bubble").each(function (i) {
			var bubble = $j(this);
			var bubbleH = bubble.outerHeight();
			var bubbleW = bubble.outerWidth();
			var bubbleC = bubble.css("color");
			var container = bubble.children(".bubble__container");
			var decalage = (i == 0) ? "+=0" : "+=350";
			var speed1 = 500;
			var speed2 = 300;

			if (bubble.hasClass("bubble--bbloc") || bubble.hasClass("bubble--bbloc-orange")) {

				container.prepend('<span class="bubble__loader"><span></span></span>');

				// scrollMonitor.create(bubble.get(0), maxOffset(bubble, true)).enterViewport(function () {
				// 	this.destroy();
				// 	tabOnViewport.push(i);

				// 	if (tabAnimComplete.indexOf(i - 1) > -1) {
				// 		tl.play();
				// 	}
				// });

				var observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.intersectionRatio > 0) {
							observer.disconnect();
							tabOnViewport.push(i);
							if (tabAnimComplete.indexOf(i - 1) > -1) {
								tl.play();
							}
						}
					});
				},
				{
					rootMargin : maxOffset(bubble)+"px"
				});
				observer.observe(bubble.get(0));


				// bubble.css({
				// 	opacity:0,
				// 	// transform : "translateY("+ $conversation.height() +"px)",
				// 	// width: 125,
				// 	// height: 50,
				// 	// color:"rgba(255,255,255,0)"
				// })

				tl.add({
					targets: bubble.get(0),
					duration: 20,
					delay:50,
					translateY: $conversation.height(),
					width: 125,
					height: 50,
					color:"rgba(255,255,255,0)"
				})
				tl.add({
					targets: bubble.get(0),
					easing: 'easeOutExpo',
					duration: speed1,
					translateY: 0,
					opacity:1,
					offset: decalage
				})

				tl.add({
					targets: bubble.get(0),
					easing: 'easeOutExpo',
					duration: speed2,
					delay:300,
					width: bubbleW,
					height: bubbleH,
					begin: function (tween) {
						bubble.removeClass("bubble--loading");
					},
					update : function(tween){
						bubble.calcRadius();
					}
				});

				tl.add({
					targets: bubble.get(0),
					duration: speed2,
					easing: 'linear',
					color: bubbleC,
					complete: function () {
						tabAnimComplete.push(i);
						if (tabOnViewport.indexOf(i + 1) < 0) {
							tl.pause();
						} else {
							tl.play();
						}
					}
				});

			} else {

				var phrase = container.html(container.html().replace(/<br\s*[\/]?>/gi, "#")).text().trim();
				var typewriter = new Typewriter(container.get(0), {
					typingSpeed: 34,
					onstart: function () {
						tl.pause();
					},
					typing: function () {
						bubble.calcRadius();
					},
					callback: function () {
						tabAnimComplete.push(i);
						if (tabOnViewport.indexOf(i + 1) < 0) {
							tl.pause();
						} else {
							tl.play();
						}
						bubble.find(".typewriter-cursor").css({
							visibility: "hidden"
						});
					}
				}).typeString(phrase);

				// scrollMonitor.create(bubble.get(0), maxOffset(bubble, true)).enterViewport(function () {
				// 	this.destroy();
				// 	tabOnViewport.push(i);
				// 	if (tabAnimComplete.indexOf(i - 1) > -1) {
				// 		tl.play();
				// 	}
				// });

				var observer2 = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.intersectionRatio > 0) {
							observer2.disconnect();
							tabOnViewport.push(i);
							if (tabAnimComplete.indexOf(i - 1) > -1) {
								tl.play();
							}
						}
					});
				},
				{
					rootMargin : maxOffset(bubble)+"px"
				});
				observer2.observe(bubble.get(0));

				bubble.css({
					opacity:0,
					// transform : "translateY("+ $conversation.height() +"px)",
				})

				tl.add({
					targets: bubble.get(0),
					duration: 20,
					delay:50,
					translateY: $conversation.height(),
				})
				tl.add({
					targets: bubble.get(0),
					easing: 'easeOutExpo',
					duration: speed1,
					translateY: 0,
					opacity:1,
					offset: decalage,
					complete: function(){
						typewriter.start();
					}
				})
			}
		});

		// scrollMonitor.create($conversation.get(0), maxOffset($conversation.find(".bubble").eq(0))).enterViewport(function () {
		// 	this.destroy();
		// 	tl.play();
		// });
		var observer3 = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0.28) {
					observer3.disconnect();
					tl.play();
				}
			});
		},
		{
			threshold:[0.3]
		});
		observer3.observe($conversation.get(0));
	});

	$j(".conversation--animate-simple").each(function () {
		var $conversation = $j(this);

		var tabOnViewport = [];
		var tabTween = [];
		var tabAnimComplete = [];

		$conversation.find(".bubble").each(function (i) {
			var bubble = $j(this);
			var speed1 = 650;
			var delai = 200;

			if (bubble.hasClass("bubble--bbloc") || bubble.hasClass("bubble--bbloc-orange")) {

				bubble.css({
					transform: "translateX(-100%)",
					opacity: 0
				});
				var tween = anime({
					targets: bubble.get(0),
					easing: 'easeOutExpo',
					duration: speed1,
					translateX: "0%",
					delay: delai,
					opacity:1,
					autoplay: false,
					complete: function () {
						tabAnimComplete.push(i);
						if (tabOnViewport.indexOf(i + 1) > -1) {
							tabTween[i + 1].play();
						}
					}
				});
				tabTween.push(tween);

				// scrollMonitor.create(bubble.get(0), maxOffset(bubble)).enterViewport(function () {
				// 	this.destroy();

				// 	tabOnViewport.push(i);
				// 	if (tabAnimComplete.indexOf(i - 1) > -1) {
				// 		tween.play();
				// 	}
				// });

				var observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.intersectionRatio > 0) {
							observer.disconnect();
							tabOnViewport.push(i);

							if (tabAnimComplete.indexOf(i - 1) > -1) {
								tween.play();
							}
						}
					});
				},
				{
					rootMargin : maxOffset(bubble)+"px"
				});
				observer.observe(bubble.get(0));

			} else {

				bubble.css({
					transform: "translateX(100%)",
					opacity: 0
				});
				var tween = anime({
					targets: bubble.get(0),
					easing: 'easeOutExpo',
					duration: speed1,
					translateX: "0%",
					opacity:1,
					delay: delai,
					autoplay: false,
					complete: function () {
						tabAnimComplete.push(i);
						if (tabOnViewport.indexOf(i + 1) > -1) {
							tabTween[i + 1].play();
						}
					}
				});
				tabTween.push(tween);

				// scrollMonitor.create(bubble.get(0), maxOffset(bubble)).enterViewport(function () {
				// 	this.destroy();
				// 	tabOnViewport.push(i);

				// 	if (i == 0 || tabAnimComplete.indexOf(i - 1) > -1) {
				// 		tween.play();
				// 	}
				// });

				var observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.intersectionRatio > 0) {
							observer.disconnect();
							tabOnViewport.push(i);

							if (i == 0 || tabAnimComplete.indexOf(i - 1) > -1) {
								tween.play();
							}
						}
					});
				},
				{
					rootMargin : maxOffset(bubble)+"px"
				});
				observer.observe(bubble.get(0));
			}
		});
	})
});