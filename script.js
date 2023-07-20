var fixedContainer = document.querySelector('.fixedCont');
let bgc = document.querySelectorAll('.colorTry'),i;

function checkVisibility() {
  var containerRect = fixedContainer.getBoundingClientRect();
  var elements = document.querySelectorAll('.section img');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elementRect = element.getBoundingClientRect();

    // Check if element is within the fixed container's viewport
    var isVisible = (
      elementRect.top >= containerRect.top &&
      elementRect.bottom <= containerRect.bottom
    );

    // Do something with the visible element
    if (isVisible) {
    console.log(element);
    let x = element.src.split('/')[4].split('.')[0]
    console.log(x);

    let l = document.querySelectorAll('.car'),i;
    for(i=0; i<l.length; i++){
      l[i].classList.remove('active')
    }

    if(x == 'aventador'){
      document.querySelectorAll('.car')[1].classList.add('active')
      let track = document.querySelector('#aventador .dots.active');
      console.log(track);
      if(track.id == 'orange'){
        document.getElementById('ct').style.backgroundColor = 'rgb(239, 117, 31)'
        document.getElementById('ct2').style.backgroundColor = 'rgb(239, 117, 31)'
      }else if(track.id == 'black'){
        document.getElementById('ct').style.backgroundColor = 'rgba(0, 0, 0,0.8)'
        document.getElementById('ct2').style.backgroundColor = 'rgba(0, 0, 0,0.8)'
      }else{
        document.getElementById('ct').style.backgroundColor = track.id
        document.getElementById('ct2').style.backgroundColor = track.id
      }
    }
    else if(x == 'urus'){
      document.querySelectorAll('.car')[2].classList.add('active')
      let track = document.querySelector('#urus .dots2.active');
      console.log(track);
      if(track.id == 'orange'){
        document.getElementById('ct').style.backgroundColor = 'rgb(239, 117, 31)'
        document.getElementById('ct2').style.backgroundColor = 'rgb(239, 117, 31)'
      }else if(track.id == 'black'){
        document.getElementById('ct').style.backgroundColor = 'rgba(0, 0, 0,0.8)'
        document.getElementById('ct2').style.backgroundColor = 'rgba(0, 0, 0,0.8)'
      }else{
        document.getElementById('ct').style.backgroundColor = track.id
        document.getElementById('ct2').style.backgroundColor = track.id
      }
    }
    else if(x == 'huracan'){
      document.querySelectorAll('.car')[3].classList.add('active')
      let track = document.querySelector('#huracan .dots3.active');
      console.log(track);
      if(track.id == 'purple'){
        document.getElementById('ct').style.backgroundColor = '#8535BA'
        document.getElementById('ct2').style.backgroundColor = '#8535BA'
      }else if(track.id == 'black'){
        document.getElementById('ct').style.backgroundColor = 'rgba(0, 0, 0,0.8)'
        document.getElementById('ct2').style.backgroundColor = 'rgba(0, 0, 0,0.8)'
      }else{
        document.getElementById('ct').style.backgroundColor = track.id
        document.getElementById('ct2').style.backgroundColor = track.id
      }
    }
    }
  }
}

let test = document.getElementById('cont')
if(test){
    test.addEventListener('scroll', checkVisibility)
}


const text = "Lamborghini"; // The text you want to display

let charIndex = 0;
const typingText = document.getElementById("heading");

function type() {
  typingText.textContent = text.slice(0, charIndex);
  charIndex++;

  if (charIndex <= text.length) {
    setTimeout(type, 100); // Adjust the typing speed (in milliseconds)
  }
}

// window.onload = () =>{
  setTimeout(type, 200)
// }



const myDiv = document.getElementById("div");

function adjustFontSize() {
  const divWidth = myDiv.offsetWidth;
  const fontSize = divWidth * 0.2; // Adjust the scaling factor as needed

  myDiv.children[0].style.fontSize = fontSize + "px";

}

// Call the adjustFontSize function initially and whenever the window is resized
adjustFontSize();

window.addEventListener("resize", adjustFontSize);

setTimeout(() => {
  myDiv.style.top = '13%'
},1200)

setTimeout(() => {
  document.getElementById('btn').style.opacity = '1'
},1800)


function choose(id){
  let c = id
  console.log("chosen", c);

  let all = document.querySelectorAll('.dots'),a;

  for(a=0; a<all.length; a++){
    all[a].classList.remove('active')
  }
  
  let b = document.querySelectorAll('.dots'),i;
  for(i=0; i<b.length;i++)
  {
    if(b[i].id==c){
      console.log("Found");
      b[i].classList.add('active')
    }
  }

  if(c=='orange'){
    document.getElementById('aventador').children[1].src = './images/aventador/2.jpg';
    document.getElementById('ct').style.backgroundColor = 'rgb(239, 117, 31)'
    document.getElementById('ct2').style.backgroundColor = 'rgb(239, 117, 31)'
  }else if(c=='blue'){
    document.getElementById('aventador').children[1].src = './images/aventador/3.jpg';
    document.getElementById('ct').style.backgroundColor = 'blue'
    document.getElementById('ct2').style.backgroundColor = 'blue'
  }
  else if(c=='red'){
    document.getElementById('aventador').children[1].src = './images/aventador/6.jpg';
    document.getElementById('ct').style.backgroundColor = 'red'
    document.getElementById('ct2').style.backgroundColor = 'red'
  }else if(c=='black'){
    document.getElementById('aventador').children[1].src = './images/aventador/7.jpg';
    document.getElementById('ct').style.backgroundColor = 'rgba(0,0,0,0.8)'
    document.getElementById('ct2').style.backgroundColor = 'rgba(0,0,0,0.8)'
  }else if(c=='cyan'){
    document.getElementById('aventador').children[1].src = './images/aventador/4.jpg';
    document.getElementById('ct').style.backgroundColor = 'cyan'
    document.getElementById('ct2').style.backgroundColor = 'cyan'
  }else if(c=='yellow'){
    document.getElementById('aventador').children[1].src = './images/aventador/9.jpg';
    document.getElementById('ct').style.backgroundColor = 'yellow'
    document.getElementById('ct2').style.backgroundColor = 'yellow'
  }else if(c=='gray'){
    document.getElementById('aventador').children[1].src = './images/aventador/10.jpg';
    document.getElementById('ct').style.backgroundColor = 'gray'
    document.getElementById('ct2').style.backgroundColor = 'gray'
  }


}

function choose2(id2){
  let c2 = id2
  console.log("chosen", c2);

  let all2 = document.querySelectorAll('.dots2'),a;

  for(a=0; a<all2.length; a++){
    all2[a].classList.remove('active')
  }

  let b = document.querySelectorAll('.dots2'),i;
  for(i=0; i<b.length;i++)
  {
    if(b[i].id==c2){
      console.log("Found");
      b[i].classList.add('active')
    }
  }

  if(c2=='blue'){
    document.getElementById('urus').children[1].src = './images/urus/1.jpeg';
    document.getElementById('ct').style.backgroundColor = c2
    document.getElementById('ct2').style.backgroundColor = c2
  }else if(c2=='yellow'){
    document.getElementById('urus').children[1].src = './images/urus/2.jpeg';
    document.getElementById('ct').style.backgroundColor = c2
    document.getElementById('ct2').style.backgroundColor = c2
  }
  else if(c2=='orange'){
    document.getElementById('urus').children[1].src = './images/urus/3.jpeg';
    document.getElementById('ct').style.backgroundColor = c2
    document.getElementById('ct2').style.backgroundColor = c2
  }else if(c2=='white'){
    document.getElementById('urus').children[1].src = './images/urus/4.jpeg';
    document.getElementById('ct').style.backgroundColor = c2
    document.getElementById('ct2').style.backgroundColor = c2
  }else if(c2=='green'){
    document.getElementById('urus').children[1].src = './images/urus/5.jpeg';
    document.getElementById('ct').style.backgroundColor = c2
    document.getElementById('ct2').style.backgroundColor = c2
  }else if(c2=='black'){
    document.getElementById('urus').children[1].src = './images/urus/6.jpeg';
    document.getElementById('ct').style.backgroundColor = 'rgba(0,0,0,0.8)'
    document.getElementById('ct2').style.backgroundColor = 'rgba(0,0,0,0.8)'
  }else if(c2=='red'){
    document.getElementById('urus').children[1].src = './images/urus/7.jpeg';
    document.getElementById('ct').style.backgroundColor = c2
    document.getElementById('ct2').style.backgroundColor = c2
  }


}
function choose3(id3){
  let c3 = id3
  console.log("chosen", c3);

  let all3 = document.querySelectorAll('.dots3'),a;

  for(a=0; a<all3.length; a++){
    all3[a].classList.remove('active')
  }

  let b = document.querySelectorAll('.dots3'),i;
  for(i=0; i<b.length;i++)
  {
    if(b[i].id==c3){
      console.log("Found");
      b[i].classList.add('active')
    }
  }

  if(c3=='purple'){
    document.getElementById('huracan').children[1].src = './images/huracan/1.jpeg';
    document.getElementById('ct').style.backgroundColor = '#8535BA'
    document.getElementById('ct2').style.backgroundColor = '#8535BA'
  }else if(c3=='gray'){
    document.getElementById('huracan').children[1].src = './images/huracan/2.jpeg';
    document.getElementById('ct').style.backgroundColor = c3
    document.getElementById('ct2').style.backgroundColor = c3
  }
  else if(c3=='blue'){
    document.getElementById('huracan').children[1].src = './images/huracan/3.jpeg';
    document.getElementById('ct').style.backgroundColor = c3
    document.getElementById('ct2').style.backgroundColor = c3
  }else if(c3=='yellow'){
    document.getElementById('huracan').children[1].src = './images/huracan/4.jpeg';
    document.getElementById('ct').style.backgroundColor = c3
    document.getElementById('ct2').style.backgroundColor = c3
  }else if(c3=='black'){
    document.getElementById('huracan').children[1].src = './images/huracan/5.jpeg';
    document.getElementById('ct').style.backgroundColor = 'rgba(0,0,0,0.8)'
    document.getElementById('ct2').style.backgroundColor = 'rgba(0,0,0,0.8)'
  }else if(c3=='green'){
    document.getElementById('huracan').children[1].src = './images/huracan/6.jpeg';
    document.getElementById('ct').style.backgroundColor = c3
    document.getElementById('ct2').style.backgroundColor = c3
  }

}

