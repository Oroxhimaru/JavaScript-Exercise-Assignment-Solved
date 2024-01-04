var rect = document.querySelector('#center');

rect.addEventListener("mousemove", (dets) => {
    //console.log(rect.getBoundingClientRect())
    var recLocation = rect.getBoundingClientRect();
     var insideRec = dets.clientX - recLocation.left;

     if (insideRec < recLocation.width/2) {
          var redcolor = gsap.utils.mapRange(0, recLocation.width/2, 255, 0, insideRec);
          gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
          })        
     }else{
        var bluecolor = gsap.utils.mapRange(recLocation.width/2, recLocation.width, 0, 255, insideRec);
          gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
          })
     }
})

rect.addEventListener('mouseleave',function() {
    gsap.to(rect, {
        backgroundColor: "white"
    })
})



/*https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()/ */
