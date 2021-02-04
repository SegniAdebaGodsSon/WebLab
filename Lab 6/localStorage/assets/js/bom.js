/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
const locationInfo = document.querySelector('.locationInfo');
const browserInfo = document.querySelector('.browserInfo');
const screenInfo = document.querySelector('.screenInfo');
const historyInfo = document.querySelector('.historyInfo');





// Display the BOM Information on the innerHTML of the elements
locationInfo.addEventListener('click', e => {
    if(e.target.tagName === 'A'){
        if(e.target.classList.contains('href')){
            e.target.children[0].textContent = location.href;
    
        }else if(e.target.classList.contains('protocol')){
            e.target.children[0].textContent = location.protocol;
    
        }else if(e.target.classList.contains('host')){
            e.target.children[0].textContent = location.host;
    
        }else if(e.target.classList.contains('port')){
            e.target.children[0].textContent = location.port;
    
        }else if(e.target.classList.contains('hostName')){
            e.target.children[0].textContent = location.hostname; 
        }
    }
});

browserInfo.addEventListener('click', e => {
    
    if(e.target.tagName === 'A'){
        if(e.target.classList.contains('appName')){
            e.target.children[0].textContent = navigator.appName;

        }else if(e.target.classList.contains('appVersion')){
            e.target.children[0].textContent = navigator.appVersion;

        }else if(e.target.classList.contains('platform')){
            e.target.children[0].textContent = navigator.platform;

        }else if(e.target.classList.contains('language')){
            e.target.children[0].textContent = navigator.language;

        }else if(e.target.classList.contains('cookie')){
            e.target.children[0].textContent = navigator.cookieEnabled;
        }
    }
});


screenInfo.addEventListener('click', e =>{
    if(e.target.tagName === 'A'){
        if(e.target.classList.contains('height')){
            e.target.children[0].textContent = screen.height;
    
        }else if(e.target.classList.contains('width')){
            e.target.children[0].textContent = screen.width;
    
        }else if(e.target.classList.contains('pixelDepth')){
            e.target.children[0].textContent = screen.pixelDepth;
        }
    }
});


historyInfo.addEventListener('click', e => {
    if(e.target.tagName === 'A'){
        if(e.target.classList.contains('historyLength')){
            e.target.children[0].textContent = history.length;
    
        }else if(e.target.classList.contains('historyState')){
            e.target.children[0].textContent = history.state;
        }
    }
});