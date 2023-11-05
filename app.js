const noBtn = document.querySelector("#noBtn")
const yesBtn = document.querySelector("#yesBtn")
const gayPage = document.querySelector("#displayPage")
const closeBtn = document.querySelector("#xBtn")

noBtn.addEventListener("click",function(){
    let randomTopBottom = Math.floor(Math.random() * 99)
    let randomLeftRight = Math.floor(Math.random() * 99)

    noBtn.style.top = randomTopBottom + "vh"
    noBtn.style.left = randomLeftRight + "vw"
})

yesBtn.addEventListener("click", function(){
    gayPage.style.display = "block"
})

closeBtn.addEventListener("click", function(){
    gayPage.style.display = "none"
})