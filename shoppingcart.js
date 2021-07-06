function plus(el) {
  /* console.log(el.parentNode.nextElementSibling.innerHTML.replace("$",""))*/
   el.nextElementSibling.value= Number(el.nextElementSibling.value) +1
   var total = Number(el.parentNode.nextElementSibling.innerHTML.replace("$",""))*el.nextElementSibling.value
   console.log(total)
   document.getElementById('total').innerHTML=Number(document.getElementById('total').innerHTML)+ Number(el.parentNode.nextElementSibling.innerHTML.replace("$",""))

}
function moins(el) {
    if(el.previousElementSibling.value>0){
     //console.log(el.parentNode.nextElementSibling.innerHTML.replace("$",""))
     el.previousElementSibling.value= Number(el.previousElementSibling.value) -1
     var total = Number(el.parentNode.nextElementSibling.innerHTML.replace("$",""))*el.previousElementSibling.value
     console.log(total)
     document.getElementById('total').innerHTML=Number(document.getElementById('total').innerHTML)-Number(el.parentNode.nextElementSibling.innerHTML.replace("$",""))
    }
}
function favorite(el) {
    if ( el.style.color=="gray") {
        el.style.color = "red"
    }
    else{
        el.style.color = "gray"
        console.log(el.style.color)
    }
    
    
}
function remove(el) {
    el.parentNode.parentNode.remove()
    
}