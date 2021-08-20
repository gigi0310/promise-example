// .first - after 1s red;
// .second - after 3s blue;
// .third - after 2s green;

const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    console.log('hello world')
    addColor(1000, "red", ".first" )
    .then(()=> addColor(3000, "blue", ".second"))
    .then(()=> addColor(2000, "green", ".third"))
    .catch((err)=>console.log(err))
})



function addColor (time, color, selector) {
    const element = document.querySelector(selector);
    return new Promise ((resolve, reject)=>{
        if (element) {
            setTimeout(()=>{
                element.style.color = color
            }, time)
            resolve()
        }else {
            reject(`There is no such element : "${selector}"`)
        }
    })
}