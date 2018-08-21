import scrollMonitor from "./js/scrollMonitor.js";
import writer from "./js/typewriter.js";
import TweenLite from "gsap/TweenLite";
import TimelineLite from "gsap/TimelineLite";
import {Expo} from "gsap/EasePack";
import CSSPlugin from "gsap/CSSPlugin";

var maxOffset = function(bubble, decalage){
    var offset = (decalage)? 0 : 250;
    console.log(bubble.get(0), Math.min($j(window).height()/2, offset, bubble.offset().top)*-1)
    return Math.min($j(window).height()/2, offset, bubble.offset().top)*-1;
};

$j(window).on("load", function(){
    $j(".conversation--animate").each(function(){
        var $conversation = $j(this);

        $conversation.outerHeight($conversation.outerHeight())

        var tl = new TimelineLite({
            paused:true,
        });

        var tabOnViewport = [];
        var tabAnimComplete = [];

        $conversation.find(".bubble").each(function(i){
            var bubble = $j(this);
            var container = bubble.children(".bubble__container");
            var decalage = (i == 0)? "" : "+=0.35";
            var speed1 = 0.4;
            var speed2 = 0.25;
            var loadingWait = "+=0.3";

            if(bubble.hasClass("bubble--bbloc") || bubble.hasClass("bubble--bbloc-orange")){

                container.prepend('<span class="bubble__loader"><span></span></span>');

                scrollMonitor.create(bubble.get(0), maxOffset(bubble, true)).enterViewport(function() {
                    this.destroy();
                    tabOnViewport.push(i);

                    if(tabAnimComplete.indexOf(i-1)>-1){
                        tl.play();
                    }
                });

                tl.fromTo(bubble, speed1, {ease: Expo.easeOut, y:$conversation.height(), alpha:0}, {y:0,alpha:1}, decalage);        tl.call(function(){
                    bubble.removeClass("bubble--loading");
                },null,null, loadingWait);

                tl.from(bubble, speed2, {ease: Expo.easeOut,width: 125, height: 50, delay:0.1, onUpdate : function(){
                    bubble.calcRadius();
                }});

                tl.from(bubble, speed2, {color:"transparent", onComplete : function(){
                    tabAnimComplete.push(i);
                    if(tabOnViewport.indexOf(i+1)<0){
                        tl.pause();
                    }else{
                        tl.play();
                    }
                }});

            }else{

                var phrase = container.html(container.html().replace(/<br\s*[\/]?>/gi, "#")).text().trim();
                var typewriter = new Typewriter(container.get(0), {
                    typingSpeed : 34,
                    onstart : function(){
                        tl.pause();
                    },
                    typing : function(){
                        bubble.calcRadius();
                    },
                    callback : function(){
                        tabAnimComplete.push(i);
                        if(tabOnViewport.indexOf(i+1)<0){
                            tl.pause();
                        }else{
                            tl.play();
                        }
                        bubble.find(".typewriter-cursor").css({visibility:"hidden"});
                    }
                }).typeString(phrase);
                scrollMonitor.create(bubble.get(0), maxOffset(bubble)).enterViewport(function() {
                    this.destroy();
                    tabOnViewport.push(i);
                    if(tabAnimComplete.indexOf(i-1)>-1){
                        tl.play();
                    }
                });

                tl.fromTo(bubble, speed1, {ease: Expo.easeOut, y:$conversation.height(), alpha:0}, {y:0,alpha:1}, decalage);

                tl.call(function(){
                    typewriter.start();
                });
            }
        });

        scrollMonitor.create($conversation.get(0), maxOffset($conversation.find(".bubble").eq(0))).enterViewport(function() {
            this.destroy();
            tl.play();
        });
    });


    $j(".conversation--animate-simple").each(function(){
        var $conversation = $j(this);

        var tabOnViewport = [];
        var tabTween = [];
        var tabAnimComplete = [];

        $conversation.find(".bubble").each(function(i){
            var bubble = $j(this);
            var speed1 = 0.4;
            var delai = 0.2;

            if(bubble.hasClass("bubble--bbloc") || bubble.hasClass("bubble--bbloc-orange")){

                var tween = TweenLite.fromTo(bubble, speed1, {delay:delai,ease: Expo.easeOut, x: "-100%", alpha:0}, {alpha:1, x : "0%", onComplete : function(){
                    tabAnimComplete.push(i);
                    if(tabOnViewport.indexOf(i+1)>-1){
                        tabTween[i+1].play();
                    }
                }});
                tween.pause();
                tabTween.push(tween);

                scrollMonitor.create(bubble.get(0), maxOffset(bubble)).enterViewport(function() {
                    this.destroy();

                    tabOnViewport.push(i);
                    if(tabAnimComplete.indexOf(i-1)>-1){
                        tween.play();
                    }
                });

            }else{

                var tween = TweenLite.fromTo(bubble, speed1, {delay:delai,ease: Expo.easeOut, x: "100%", alpha:0}, {alpha:1, x : "0%", onComplete : function(){
                    tabAnimComplete.push(i);
                    if(tabOnViewport.indexOf(i+1)>-1){
                        tabTween[i+1].play();
                    }
                }});
                tween.pause();
                tabTween.push(tween);

                scrollMonitor.create(bubble.get(0), maxOffset(bubble)).enterViewport(function() {
                    this.destroy();
                    tabOnViewport.push(i);
                    console.log(tabAnimComplete)
                    if(i == 0 || tabAnimComplete.indexOf(i-1)>-1){
                        tween.play();
                    }
                });
            }
        });
    })
});