let aboutsound = document.querySelector('.aboutsound');
let projectssound = document.querySelector('.projectssound');
let contactssound = document.querySelector('.contactssound')
let audio = document.getElementsByTagName('audio');
audio[0].volume = 0.4;
audio[1].volume = 0.4;
aboutsound.addEventListener('mouseenter',()=>{
    audio[0].play()
})
projectssound.addEventListener('mouseenter',()=>{
    audio[0].play()
})
contactssound.addEventListener('mouseenter',()=>{
    audio[0].play()
})



//on click sound  
aboutsound.addEventListener('click',()=>{
    audio[1].play()
})
projectssound.addEventListener('click',()=>{
    audio[1].play()
})
contactssound.addEventListener('click',()=>{
    audio[1].play()
})