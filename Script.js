

var timeout;
function navanimation(){
var tl = gsap.timeline();
    tl.from(".nav",{
         y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        stagger: 0.6
    }) 
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        stagger: .2,
    })    
       
}
navanimation()

// function pageanimation(){
// // var cursor = document.querySelector(".cursor");
// var page3 = document.querySelector(".page3");
// var page4 = document.querySelector(".page4");
// var cursor = document.querySelector("#cursor")
// var page5 = document.querySelector(".page5")
// // var page4 = document.querySelector(".page5");



// //  /* 🔥 CURSOR FOLLOW – FULL VIEWPORT */
// //  document.addEventListener("mousemove", function (e) {
// //  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// //  });

//  /* 🔥 BOX HOVER EFFECT */
//  page4.addEventListener("mouseenter", function () {
//  page4.style.backgroundColor = "black";
//  cursor.style.backgroundColor = "white"
// // page5.style.backgroundColor = "black"

// //  page3.style.backgroundColor = "black";
// //  cursor.style.transform += " scale(2)";
//  });

//  page4.addEventListener("mouseleave", function () {
//  page4.style.backgroundColor = "rgba(255, 255, 255, 1)";
//  page3.style.backgroundColor = "rgba(255, 255, 255, 1)";

// //  cursor.style.transform = cursor.style.transform.replace(" scale(2)", "");
//  });

//  page4.addEventListener("mouseleave", function () {
//   cursor.style.backgroundColor = "black"
// });

//  page5.addEventListener("mouseenter", function () {
//   cursor.style.backgroundColor = "white"
// });



//  page5.addEventListener("mouseenter", function () {
//  page4.style.backgroundColor = "black";
 
//  });


// }

//  pageanimation()

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});



///
function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: { smooth: false },
    tablet: { smooth: false }
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

locoscroll()


function shery(){
Shery.imageEffect("#picimg img", {
          style: 5,
          // debug: true,
          // gooey: true,
          config: {"uFrequencyX":{"value":38.93,"range":[0,100]},"uFrequencyY":{"value":14.5,"range":[0,100]},"uFrequencyZ":{"value":8.4,"range":[0,100]},"geoVertex":{"range":[1,64],"value":20.72},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.162158578626359},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.02,"y":0.02}},"shapeScale":{"value":{"x":0.5,"y":0.59}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.61,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

})

Shery.imageEffect("#pickaimg img", {
          style: 5,
          // debug: true,
         config: {"uFrequencyX":{"value":38.93,"range":[0,100]},"uFrequencyY":{"value":14.5,"range":[0,100]},"uFrequencyZ":{"value":8.4,"range":[0,100]},"geoVertex":{"range":[1,64],"value":20.72},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.162158578626359},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.02,"y":0.02}},"shapeScale":{"value":{"x":0.5,"y":0.59}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.61,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

})

  Shery.imageEffect("#bimg", {
            style: 5,
            // debug: true,                                                                                   
            gooey: true,
            config: { "a": { "value": 1.37, "range": [0, 30] }, "b": { "value": -0.89, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.9236118716460409 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.61, "range": [0, 10] }, "metaball": { "value": 0.18, "range": [0, 2] }, "discard_threshold": { "value": 0.61, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.41, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
           
        })
}
shery()

main = document.querySelector("#main")
cursor = document.querySelector("#cursor")
box = document.querySelector(".box")



main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1

    })
})
