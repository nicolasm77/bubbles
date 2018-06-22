import scroll from "./js/scrollMonitor.js";
import writer from "./js/typewriter.js";
import { TweenLite, TimelineLite } from "gsap/all";

const $conversation = $j(".conversation2");
const $textarea = $j(".conversation__textarea span");
const $bulle = $conversation.find(".bubble").first();
const $bulleBoul = $conversation.find(".bubble").last();
const phrase = $bulle.text().trim();

const typewriter = new Typewriter($textarea.get(0), {
    onstart : function(){
        tl.pause();
    },
    callback : function(){
        tl.play();
    }
}).typeString(phrase);

const tl = new TimelineLite({
    paused:true
});

tl.play();
typewriter.start();
tl.to($textarea, 0.1, {alpha:0}, "+=0.5");
tl.to($textarea.parent(), 0.3, {y:"100%"});
tl.from($bulle, 0.9, {ease: Expo.easeOut, y:$conversation.height(), alpha:0}, "-=0.3");
tl.call(function(){
    $bulleBoul.addClass("bubble--loading");
})
