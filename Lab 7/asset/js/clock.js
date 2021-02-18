const minSecFactor = 6;
const hourFactor = 30
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * hourFactor;
    let mm = day.getMinutes() * minSecFactor;
    let ss = day.getSeconds() * minSecFactor;
    console.log(hh, mm, ss);

    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});



/**
 * ===============  Second ===============
 * -> there are 60 different seconds, so we need to somehow devide 360 degrees to * *   be used by some factor, 360/60 = 6
 * 
 * =============== Minute ===============
 * -> same logic from above applies here, the factor we use is 360/60 = 6
 * 
 * 
 * =============== Hours ===============
 * -> there are only 12 different possibilities of hours and there are 360 degrees, we 
 * need a relation ship or factor so that one cycle of 12 hours is equal to 360 degrees
 * so our factor here is 360/12=30
 */