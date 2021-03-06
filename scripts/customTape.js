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

let imgAll = [document.querySelectorAll('#imgSrcLogo'),document.querySelectorAll('#imgSrcGraphic'),document.querySelectorAll('#imgSrcDesc'),document.querySelectorAll('#imgSrcMarking')]


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
        if(currentMenu==4) DownloadImage();
        UpdateElement();
    });
}
let arrowBtnAll = document.querySelectorAll('#arrowBtn');
for (let i = 0; i < arrowBtnAll.length; i++) {
    arrowBtnAll[i].addEventListener('click',(e)=>{
        var btnIndex = Array.from(arrowBtnAll).indexOf(e.currentTarget);
        selIndex[Math.floor(btnIndex/2)] = (selIndex[Math.floor(btnIndex/2)]+((btnIndex%2)*2)-1+menuAll[Math.floor(btnIndex/2)].querySelector('#selGroup').childElementCount*2)%menuAll[currentMenu].querySelector('#selGroup').childElementCount;
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
    }else if(code=='Enter'&&currentMenu==4){
        DownloadImage();
    }else return;
    UpdateElement();
});
document.addEventListener('keyup',(e)=>{
    if(e.key=='Escape') location.href='index.html';
})
 
UpdateElement();

function DownloadImage() {
    html2canvas(document.body, { useCORS:true, allowTaint:true, width:360, height:640, x:1007.5, y:134, windowWidth:1920, windowHeight:1080}).then(canvas => {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'CustomTape.jpg';
        a.click();
        });
    console.log("download");
}

function UpdateElement(){
    UpdateImage();
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

function UpdateImage(){
    for (let i = 0; i < imgAll.length; i++) {
        for (let j = 0; j < imgAll[i].length; j++) {
            imgAll[i][j].style.display='none';
        }        
    }
    for (let i = 0; i < selIndex.length; i++) {
        imgAll[i][selIndex[i]].style.display='initial';
    }
}
