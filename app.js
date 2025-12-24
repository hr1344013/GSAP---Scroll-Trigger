/*gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})*/

/*gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    rotate:720,
    opacity:0,
    scrollTrigger:{
         trigger:"#page2 #box",
         scroller:"body",
         markers:true,
         start:"top 60%",
         end:"top 30%",
         scrub:2,
         pin:true
    }
})*/

/*gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        markers:true,
        scroller:"body",
        start:"top 50%"
    }
})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h1",
        markers:true,
        scroller:"body",
        start:"top 50%"
    }
})*/
//pin property in gsap 
gsap.to("#page2 h1",{
    transform:"translate(-250%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -200%",
        scrub:2,
        pin:true
    }
}) 
