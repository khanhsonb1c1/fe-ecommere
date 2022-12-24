
var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')

var prevBtn = document.querySelector('prev')
var nextvBtn = document.querySelector('next')

var currentIndex = 0;

function updateImgIndex(index){

    // remove active class

    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active')
    })

    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((img, index) =>{
    img.addEventListener('click', e=>{
        updateImgIndex(index)
    })
})

prevBtn.addEventListener('click', e=>{

})