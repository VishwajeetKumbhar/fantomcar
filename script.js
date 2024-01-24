


var p1 = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

p1.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y

  })
})
p1.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 1
  })
})
p1.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 0
  })
})


var t1 = gsap.timeline()

t1.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.3
})

t1.to("#loader h3",{
  opacity:0,
  x:-40,
  duration:1,
  stagger:0.3
})

t1.to("#loader",{
  opacity:0
})
t1.to("#loader",{
  display:"none"
})



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});


var menuBtn =document.getElementById("menuBtn")
        var sideNav =document.getElementById("sideNav")
        var menu =document.getElementById("menu")
 
        sideNav.style.right = "-250px"

        menuBtn.onclick =function(){
            if(sideNav.style.right == "-250px"){
                sideNav.style.right="0";
                menu.src="./Img/close.png";
            }
            else{
                sideNav.style.right="-250px"
                menu.src="./Img/menu.png";
            }
        }