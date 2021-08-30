setInterval(function(){
    document.querySelector('button').classList.remove('is-loading');
    let date= new Date();
let hourv= date.getHours();
let minv= date.getMinutes();
let secv=  date.getSeconds();
let dur= 'AM';
if(hourv==0){
   hourv= 12;
}
if(hourv>12){
    hourv=hourv-12;
    dur='PM';
}
hourv<10?hourv="0"+hourv:hourv=hourv;
minv<10?minv="0"+minv:minv=minv;
secv<10?secv="0"+secv:secv=secv;
document.querySelector('.time').innerText=`${hourv}:${minv}:${secv} ${dur}`;
document.getElementById('hr').innerHTML=`${hourv}`;
document.getElementById('min').innerHTML=`${minv}`;
document.getElementById('sec').innerHTML=`${secv}`;
document.getElementById('d').innerHTML=`${dur}`;
},500);

