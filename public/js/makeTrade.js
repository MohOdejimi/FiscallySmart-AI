const firstBuyBtn = document.getElementById('buyBtn')
const firstSellBtn = document.getElementById('sellBtn')
const secondBuyBtn = document.getElementById('buy')
const secondSellBtn = document.getElementById('sell')
const modal = document.getElementById('buyModal')
const buyForm = document.getElementById('buyForm')
const sellForm =document.getElementById('sellForm')

firstBuyBtn.onclick = function () {
    modal.style.display = 'block'
    buyForm.style.display = 'block'
    sellForm.style.display = 'none'
}



console.log(firstBuyBtn)