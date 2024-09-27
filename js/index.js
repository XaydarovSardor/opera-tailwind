const burgerBtn= document.querySelector(".menu-burger"),
    body = document.querySelector("body");
burgerBtn.addEventListener("click", ()=>{
    const navList = document.querySelector(".nav-list");
    burgerBtn.classList.toggle("active")
    navList.classList.toggle("open")
    body.classList.toggle("overflow-y-hidden")
})

IMask(
    document.getElementById('phone-mask'),
    {
      mask: '+{7}(000)000-00-00'
    }
  )