let menuAll = document.querySelectorAll('#menuContainer');
let imgAll = document.querySelectorAll('#mainImg');
let currentMenu = 0;

//mouse input
for (let i = 0; i < menuAll.length; i++) {
    menuAll[i].addEventListener('mouseover',(e)=>{
        var element = e.currentTarget;
        currentMenu = Array.from(menuAll).indexOf(element);
        UpdateElement();
    });
    menuAll[i].addEventListener('click',(e)=>{
        var element = e.currentTarget;
        currentMenu = Array.from(menuAll).indexOf(element);
        UpdateElement();
        MovePage();
    });
}

//keyboard input
document.addEventListener('keydown',(e)=>{
    var code = e.key;
    if(code=='ArrowUp'){
        currentMenu = (currentMenu-1+menuAll.length)%menuAll.length;
    }else if(code=='ArrowDown'){
        currentMenu = (currentMenu+1)%menuAll.length;
    }else if(code=='Enter' || code==' '){
        MovePage();
    }
    UpdateElement();
});

UpdateElement();

function MovePage(){
    if(currentMenu==0) location.href='customtapes.html';
    else if(currentMenu==1) location.href = 'showroom.html';
    else if(currentMenu==2) location.href = 'techinfo.html';
    else if(currentMenu==3) location.href = 'history.html';
}

function UpdateElement(){
    UpdateImg();
    var temp;
    //remove all
    for (let i = 0; i < menuAll.length; i++) {
        temp = menuAll[i].querySelectorAll('.activeWhite');
        for (let j = 0; j < temp.length; j++) {
            temp[j].style.backgroundColor="#00000000";
            temp[j].classList.remove('boxVhs');
        }
        temp = menuAll[i].querySelectorAll('.activeTextWhite');
        for (let j = 0; j < temp.length; j++) {
            temp[j].style.color="#000000";
            temp[j].classList.remove('textVhs');
        }
        temp = menuAll[i].querySelectorAll('.activeBlack');
        for (let j = 0; j < temp.length; j++) {
            temp[j].style.backgroundColor="#d9d9d9";
            temp[j].classList.add('boxVhs');
        }
        temp = menuAll[i].querySelectorAll('.activeTextBlack');
        for (let j = 0; j < temp.length; j++) {
            temp[j].style.color="#d9d9d9";
            temp[j].classList.add('textVhs');
        }
        }
    temp = menuAll[currentMenu].querySelectorAll('.activeWhite');
    console.log(temp.length);
    for (let j = 0; j < temp.length; j++) {
        temp[j].style.backgroundColor="#d9d9d9";
        temp[j].classList.add('boxVhs');
    }
    temp = menuAll[currentMenu].querySelectorAll('.activeTextWhite');
    for (let j = 0; j < temp.length; j++) {
        temp[j].style.color="#d9d9d9";
        temp[j].classList.add('textVhs');
    }
    temp = menuAll[currentMenu].querySelectorAll('.activeBlack');
    for (let j = 0; j < temp.length; j++) {
        temp[j].style.backgroundColor="#00000000";
        temp[j].classList.remove('boxVhs');
    }
    temp = menuAll[currentMenu].querySelectorAll('.activeTextBlack');
    for (let j = 0; j < temp.length; j++) {
        temp[j].style.color="#000000";
        temp[j].classList.remove('textVhs');
    }
}

function UpdateImg(){
    for (let i = 0; i < imgAll.length; i++) {
        imgAll[i].style.display = "none";   
    }  
    imgAll[currentMenu].style.display = "initial";
}