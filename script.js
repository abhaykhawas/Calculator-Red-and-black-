one = document.querySelector(".one");
two = document.querySelector(".two");
three = document.querySelector(".three");
four = document.querySelector(".four");
five = document.querySelector(".five");
six = document.querySelector(".six");
seven = document.querySelector(".seven");
eight = document.querySelector(".eight");
nine = document.querySelector(".nine");
zero = document.querySelector(".zero");
equal = document.querySelector(".equal");
plus = document.querySelector(".plus");
minus = document.querySelector(".minus");
multiply = document.querySelector(".multiply");
divide = document.querySelector(".divide");
back = document.querySelector(".back");
display = document.querySelector(".display")


val = ''

one.addEventListener("click", function() {
    val = val+'1'
    display.innerHTML  = val
    console.log(val)
})

two.addEventListener("click", function() {
    val = val+'2'
    display.innerHTML  = val
    console.log(val)
})

three.addEventListener("click", function() {
    val = val+'3'
    display.innerHTML  = val
    console.log(val)
})

four.addEventListener("click", function() {
    val = val+'4'
    display.innerHTML  = val
    console.log(val)
})

five.addEventListener("click", function() {
    val = val+'5'
    display.innerHTML  = val
    console.log(val)
})

six.addEventListener("click", function() {
    val = val+'6'
    display.innerHTML  = val
    console.log(val)
})

seven.addEventListener("click", function() {
    val = val+'7'
    display.innerHTML  = val
    console.log(val)
})

eight.addEventListener("click", function() {
    val = val+'8'
    display.innerHTML  = val
    console.log(val)
})

nine.addEventListener("click", function() {
    val = val+'9'
    display.innerHTML  = val
    console.log(val)
})

zero.addEventListener("click", function() {
    val = val+'0'
    display.innerHTML  = val
    console.log(val)
})


plus.addEventListener("click", function() {
    val = val+'+'
    display.innerHTML  = val
    console.log(val)
})

minus.addEventListener("click", function() {
    val = val+'-'
    display.innerHTML  = val
    console.log(val)
})

multiply.addEventListener("click", function() {
    val = val+'*'
    display.innerHTML  = val
    console.log(val)
})

divide.addEventListener("click", function() {
    val = val+'/'
    display.innerHTML  = val
    console.log(val)
})

back.addEventListener("click", function() {
    val = ''
    display.innerHTML  = val
    console.log(val)
})

equal.addEventListener("click", function() {
    display.innerHTML  = eval(val)
    console.log(eval(val))
})