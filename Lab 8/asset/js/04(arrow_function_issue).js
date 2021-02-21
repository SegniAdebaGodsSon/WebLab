//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    es5.innerHTML = `'this' in object es5 👉🏽 ${myObjectLiteral.es5()}`;
    es6.innerHTML = `'this' in object es6 👉🏽 ${myObjectLiteral.es6()}`;



})



let myObjectLiteral = {
    name: 'Segni',
    email: 'se.segni.adeba@gmail.com',
    es5: function(){
        return this;
    },

    es6: () =>{
        return this;
    }
}