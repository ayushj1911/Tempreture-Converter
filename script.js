let cel = document.getElementById("cel")
// console.log(cel);

let fah = document.getElementById("fahr")
// console.log(fah);

cel.addEventListener('input', function () {
    let c = this.value
    let f = (c * 9/5) + 32
    fah.value = f
})

fah.addEventListener('input', function () {
    let f = this.value
    let c = (f - 32 ) * 5/9 
    cel.value = c 
})