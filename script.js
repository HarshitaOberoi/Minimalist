const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });

document.querySelector(".button").addEventListener("mouseenter",function (){
  gsap.to("video",{
    opacity:1,
    scale:1,
    ease:Power4
    
    
  })
})
document.querySelector(".button").addEventListener("mouseleave",function (){
  gsap.to("video",{
    opacity:0,
    scale:-1
    
    
    
  })
})
  gsap.from(".left p,.center p ,.right p",{
    stagger:0.1,
    opacity:0,
    duration:1,
    scrub:1,
    ease:Power3,
    y:10
  })
  Shery.textAnimate(".mc h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    
    
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    
  });
  gsap.from(".mc ,.ml,.mr",{
    stagger:0.1,
    opacity:0,
    y:50,

    duration:1,
    scrub:1,
    ease:Power3
    
  })
  Shery.imageEffect(".mc img, .ml img",{
    style: 3,
   config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":9.09,"range":[0,100]},"uFrequencyZ":{"value":70.25,"range":[0,100]},"geoVertex":{"range":[1,64],"value":1},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7224793192240933},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":2},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.42,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":-0.13,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]}},
    
    

  })
  Shery.imageEffect(".dl img,.dr img",{
    style:2,
    config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":-1.77,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":3.78,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":0.83,"range":[-1,25]},"colorExposer":{"value":0.32,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6999963720720739},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
  })
  gsap.from(".mc img ,.mr",{
    z:-3,
    opacity:0,
    duration:1.4,
    
    ease:Expo.easeInOut(2)
  })
  Shery.imageEffect(".bimg ",{
    style:4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.4999866479987505},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.51,"range":[0,2]},"discard_threshold":{"value":0.48,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    gooey:true
  })