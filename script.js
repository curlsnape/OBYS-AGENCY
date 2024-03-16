function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();
function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });

  tl.from(".linep1", {
    opacity: 0,
    onStart: function () {
      var h5 = document.querySelector(".line h5");
      var count = 0;
      setInterval(() => {
        if (count < 100) {
          count++;
          h5.innerHTML = count;
        }
      }, 33);
    },
  });

  tl.to(".loader", {
    opacity: 0,
    delay: 3.2,
    duration: 0.6,
  });

  tl.from("#page1", {
    y: 1200,
    duration: 0.3,
    delay: 0.2,
  });
  tl.to(".loader", {
    display: "none",
  });
  tl.from("nav", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from("#text1 h1,#text2 h1,#text3 span,#text4 h1", {
    y: 140,
    // opacity:0,
    stagger: 0.2,
    delay: 0.2,
  });
  tl.from(
    ".text,#page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}
loaderAnimation();

function mouseAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".navp2 h3,.navp1 #box");
  var vid = document.querySelector(".vidcont video")
var videocon = document.querySelector(".vidcont");
videocon.addEventListener("mouseenter",function(){
  videocon.addEventListener("mousemove",function(dets){
   gsap.to(".mousefollower",{
    opacity:0
   })
    gsap.to(".play1",{
    left:dets.x -500,
    top:dets.y -250
   })
  })
})
videocon.addEventListener("mouseleave",function(){
  gsap.to(".mousefollower",{
    opacity:1
   })
   gsap.to(".play1",{
    top:"-13%",
    left:"69%"
   })
})
var flag = 0;
videocon.addEventListener("click",function(){
if(flag == 0){
  vid.play()
vid.style.opacity = "1"
document.querySelector(".play1").innerHTML = `<i class="ri-pause-line"></i>`
gsap.to(".play1",{
  scale:0.5
})
flag = 1;
} 
else{
  vid.pause()
  vid.style.opacity = "0"
  document.querySelector(".play1").innerHTML = `<i class="ri-play-fill"></i>`
  gsap.to(".play1",{
    scale:1
  })
  flag = 0;
}

})
}
mouseAnimation();

function gooeyeffect() {
  Shery.imageEffect(".imgs", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: -0.95, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.8392842552496119 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false },
      onMouse: { value: 0 },
      noise_speed: { value: 0.92, range: [0, 10] },
      metaball: { value: 0.52, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 6.87, range: [0, 100] },
    },
    gooey: true,
  });
}
gooeyeffect();

function flagAnimation(){
  document.addEventListener("mousemove",function(det){
    gsap.to(".flag",{
    top:det.y,
    left:det.x
    })
    })
  
    var flag1 = document.querySelector("#text3");
  
    flag1.addEventListener("mouseenter",function(){
      gsap.to(".flag",{
     opacity:1
      })
    })
    flag1.addEventListener("mouseleave",function(){
      gsap.to(".flag",{
     opacity:0
      })
    })
    
}
flagAnimation();
var clutter = ''
var clutter2 = ''
function footerAnimation(){

  document.querySelector(".footertext h1").textContent.split("").forEach((elem)=>{
   clutter += `<span>${elem}</span>`
  })
  document.querySelector(".footertext h1").innerHTML = clutter;
  document.querySelector(".footertext h2").textContent.split("").forEach((e)=>{
   clutter2 += `<span>${e}</span>`
  })
  document.querySelector(".footertext h2").innerHTML = clutter2;
  
document.querySelector(".footertext").addEventListener("mouseenter",function(){
  gsap.to(".footertext h1 span",{
    opacity:0,
    stagger:0.06
  })
  gsap.to(".footertext h2 span",{
    
    delay:0.4,opacity:1,
    stagger:0.1
  })
  gsap.to(".footertext h2",{
    
    opacity:1,
  
  })

})
document.querySelector(".footertext").addEventListener("mouseleave",function(){
  gsap.to(".footertext h1 span",{
    delay:0.4,
    opacity:1,
    stagger:0.1
  })
  gsap.to(".footertext h2 span",{
    opacity:0,
    stagger:0.02
  
  })

})

}
footerAnimation()

