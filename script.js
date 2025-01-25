function locomotive(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive();
function LoadingAnimation(){
    
var tl =gsap.timeline()
tl.from(".line h1",{
   y:150,
   stagger:0.25,
   delay:0.5,
   duration:0.6
})

tl.from("#line-part1  , .line h2",{
   opacity:0,
   onStart:function(){
       var h5 =document.querySelector("#line-part1 h5");
       var count =0;
       setInterval(function(){
         if(count<100){
           h5.innerHTML=count++;
         }
         else{
           h5.innerHTML=count
         }
       },34);
   },

});
tl.to("#loader",{
   opacity:0,
   duration:0.2,
   delay:3
})

tl.from("#page1",{
   y:1200,
   opacity:0,
    delay:0.2,
//    ease:power4
   
})
tl.to("#loader",{
   display:"none"
})
tl.from("#nav",{
   opacity:0
})
tl.from("#hero1 h1, #hero2 h1 , #hero3 h2,#hero4 h1",{
   y:140,
   stagger:0.2
})
}
LoadingAnimation();
function cursorAnimation(){
   document.addEventListener("mousemove",function(dets){
      gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
      })
    })
}
cursorAnimation();
// Shery.makeMagnet("#nav-part2 h4" , {});
Shery.makeMagnet("#nav-part2 h4" ,{

});
function SheryAnimation(){
  Shery.imageEffect(".image-div",{
    style:5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749998247967},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.46,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true
  })
}
SheryAnimation()
var cursor =document.querySelector("#vedio-container");
var vedio = document.querySelector("#vedio-container video");
   cursor.addEventListener("mouseenter",function(){
    cursor.addEventListener("mousemove",function(dets){
       gsap.to("#vedio-cursor",{
         left:dets.x -570,
         y:dets.y - 300
       })
    })
   })
   cursor.addEventListener("mouseleave",function(){
    gsap.to("#vedio-cursor",{
       left:"80%",
       top:"-9%",
       
    })
   })
   var flag =0;
   cursor.addEventListener("click",function(){
    if(flag==0){
      vedio.play();
      vedio.style.opacity =1;
      document.querySelector("#vedio-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
      gsap.to("#vedio-cursor",{
        scale:0.5  
      })
      flag=1;
    }
    else{
      vedio.pause();
      vedio.style.opacity =0;
      document.querySelector("#vedio-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
      gsap.to("#vedio-cursor",{
        scale:1
     })
     flag =0;
  }
   })
   document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      left:dets.x,
      y:dets.y
    })
   })
   document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
      opacity:1
    })
   })
   document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
      opacity:0
    })
   })
