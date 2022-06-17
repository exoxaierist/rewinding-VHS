let logoAll = [document.querySelectorAll("#logo"),document.querySelectorAll('#logo2')];
let graphicAll = [document.querySelectorAll('#graphic'),document.querySelectorAll('#graphic2')];
let descAll = [document.querySelectorAll('#desc'),document.querySelectorAll('#desc2')];

//menu
let menuAll = document.querySelectorAll('#menuContainer');
let currentMenu = 0;
let selIndex = [];

let selBtnAll = [];
for (let i = 0; i < document.querySelectorAll('#selGroup').length; i++) {
    selBtnAll.push(document.querySelectorAll('#selGroup')[i].childNodes);
    selIndex.push(0);
}
 
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
    });
}
let arrowBtnAll = document.querySelectorAll('#arrowBtn');
for (let i = 0; i < arrowBtnAll.length; i++) {
    arrowBtnAll[i].addEventListener('click',(e)=>{
        var btnIndex = Array.from(arrowBtnAll).indexOf(e.currentTarget);
        selIndex[Math.floor(btnIndex/2)] = (selIndex[Math.floor(btnIndex/2)]-((btnIndex%2)*2)-1+menuAll[Math.floor(btnIndex/2)].querySelector('#selGroup').childElementCount*2)%menuAll[currentMenu].querySelector('#selGroup').childElementCount;
    });
}

//keyboard input
document.addEventListener('keydown',(e)=>{
    var code = e.key;
    if(code=='ArrowUp'){
        currentMenu = (currentMenu-1+menuAll.length)%menuAll.length;
    }else if(code=='ArrowDown'){
        currentMenu = (currentMenu+1)%menuAll.length;
    }
    else if(code=='ArrowLeft'){
        selIndex[currentMenu] = (selIndex[currentMenu]-1+menuAll[currentMenu].querySelector('#selGroup').childElementCount)%menuAll[currentMenu].querySelector('#selGroup').childElementCount;
    }else if(code=='ArrowRight'){
        selIndex[currentMenu] = (selIndex[currentMenu]+1)%menuAll[currentMenu].querySelector('#selGroup').childElementCount;
    }else return;
    UpdateElement();
});
document.addEventListener('keyup',(e)=>{
    if(e.key=='Escape') location.href='index.html';
})
 
UpdateElement();

function UpdateElement(){
    console.log("update element");
    var temp;
    //remove all
    temp = document.querySelectorAll('.activeWhite');
    for (let j = 0; j < temp.length; j++) {
        temp[j].style.backgroundColor="#00000000";
        temp[j].classList.remove('boxVhs');
    }
    temp = document.querySelectorAll('.activeTextWhite');
    for (let j = 0; j < temp.length; j++) {
        temp[j].style.color="#000000";
        temp[j].classList.remove('textVhs');
    }
    temp = document.querySelectorAll('.activeBlack');
    for (let j = 0; j < temp.length; j++) {
        temp[j].style.backgroundColor="#d9d9d9";
        temp[j].classList.add('boxVhs');
    }
    temp = document.querySelectorAll('.activeTextBlack');
    for (let j = 0; j < temp.length; j++) {
        temp[j].style.color="#d9d9d9";
        temp[j].classList.add('textVhs');
    }

    //activate
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
        temp[j].style.backgroundcolor="#00000000";
        temp[j].classList.remove('boxVhs');
    }
    temp = menuAll[currentMenu].querySelectorAll('.activeTextBlack');
    for (let j = 0; j < temp.length; j++) {
        temp[j].style.color="#000000";
        temp[j].classList.remove('textVhs');
    }


    temp = document.querySelectorAll('.active');
    for (let i = 0; i < temp.length; i++) {
        temp[i].style.display = 'none';
    }
    for (let i = 0; i < menuAll.length; i++) {
        temp = menuAll[i].querySelectorAll('.active');
        temp[selIndex[i]].style.display = 'initial';
    }
}
