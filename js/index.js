const imgs =[
    '../images/pic-1.jpg',
    '../images/pic-2.jpg',
    '../images/pic-3.jpg',
    '../images/pic-4.jpg',
    '../images/pic-5.jpg',
    '../images/pic-6.jpg',
    '../images/pic-7.jpg',
    '../images/pic-8.jpg',
    '../images/pic-9.jpg',
]
let imgIndex = 0;
const setUl= document.getElementById('set-img');
setInterval(()=>{
    if(imgIndex === imgs.length){
        imgIndex = 0;
    }
    const imgUrl= imgs[imgIndex]
    setUl.setAttribute('src',imgUrl)
    imgIndex++;
},2000)