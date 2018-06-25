import scrollMonitor from "./js/scrollMonitor.js";
import writer from "./js/typewriter.js";
import { TweenLite, TimelineLite } from "gsap/all";


$j(".conversation--animate").each(function(){
    const $conversation = $j(this);

    $conversation.height($conversation.outerHeight())

    const tl = new TimelineLite({
        paused:true,
    });

    let tabOnViewport = [];
    let tabAnimComplete = [];

    $conversation.find(".bubble").each(function(i){
        const bubble = $j(this);
        const container = bubble.children(".bubble__container");
        const decalage = (i == 0)? "" : "+=0.35";
        const speed1 = 0.4;
        const speed2 = 0.25;
        const loadingWait = "+=0.3";

        if(bubble.hasClass("bubble--bbloc") || bubble.hasClass("bubble--bbloc-orange")){

            container.prepend('<span class="loader"><span></span></span>');

            scrollMonitor.create(bubble.get(0), ($conversation.height()/-2)).enterViewport(function() {
                this.destroy();
                tabOnViewport.push(i);
                console.log(tabAnimComplete,i, tabAnimComplete.indexOf(i-1)<0)
                if(tabAnimComplete.indexOf(i-1)>-1){
                    tl.play();
                    console.log("play")
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
                    console.log("pause")
                }else{
                    tl.play();
                }
            }});

        }else{

            const phrase = container.html(container.html().replace(/<br\s*[\/]?>/gi, "#")).text().trim();
            const typewriter = new Typewriter(container.get(0), {
                typingSpeed : 40,
                onstart : function(){
                    tl.pause();
                },
                typing : function(){
                    bubble.calcRadius();
                },
                callback : function(){
                    console.log("FINI")
                    tabAnimComplete.push(i);
                    if(tabOnViewport.indexOf(i+1)<0){
                        tl.pause();
                        console.log("pause")
                    }else{
                        tl.play();
                    }
                    bubble.find(".typewriter-cursor").css({visibility:"hidden"});
                }
            }).typeString(phrase);
            scrollMonitor.create(bubble.get(0), ($conversation.height()/-2)).enterViewport(function() {
                this.destroy();
                tabOnViewport.push(i);
                if(tabAnimComplete.indexOf(i-1)>-1){
                    tl.play();
                    console.log("play")
                }
            });

            tl.fromTo(bubble, speed1, {ease: Expo.easeOut, y:$conversation.height(), alpha:0}, {y:0,alpha:1}, decalage);

            tl.call(function(){
                typewriter.start();
            });

        }
    });

    scrollMonitor.create($conversation.get(0), ($conversation.height()/-2)).enterViewport(function() {
        this.destroy();
        tl.play();
    });
})


$j(".conversation--animate-simple").each(function(){
    const $conversation = $j(this);

    $conversation.height($conversation.outerHeight())

    let tabOnViewport = [];
    let tabAnimComplete = [];

    $conversation.find(".bubble").each(function(i){
        const bubble = $j(this);
        const speed1 = 0.4;
        const delai = 0.2;

        if(bubble.hasClass("bubble--bbloc") || bubble.hasClass("bubble--bbloc-orange")){

            const tween = TweenLite.fromTo(bubble, speed1, {delay:delai,ease: Expo.easeOut, x: "-100%", alpha:0}, {alpha:1, x : "0%"}).pause();

            scrollMonitor.create(bubble.get(0), ($conversation.height()/-2)).enterViewport(function() {
                this.destroy();

                tween.play();
            });

        }else{

            const tween = TweenLite.fromTo(bubble, speed1, {delay:delai,ease: Expo.easeOut, x: "100%", alpha:0}, {alpha:1, x : "0%"}).pause();

            scrollMonitor.create(bubble.get(0), ($conversation.height()/-2)).enterViewport(function() {
                this.destroy();

                tween.play();
            });
        }
    });

    scrollMonitor.create($conversation.get(0), ($conversation.height()/-2)).enterViewport(function() {
        this.destroy();
    });
})
