let slides=document.querySelectorAll(".slide");
let barIcon=document.getElementById("bar");//bug ไม่ใส่ใน ""
let ul=document.querySelector("ul");

console.log(slides);
let count=0;
//คุณสมบัติ Style left ใช้สำหรับตั้งค่าหรือส่งคืนตำแหน่งด้านซ้ายขององค์ประกอบที่จัดตำแหน่งไว้ คุณสมบัติ Style left ใช้สำหรับระบุตำแหน่งด้านซ้ายขององค์ประกอบต่างๆ รวมถึง padding, scrollbar, border และ margin
slides.forEach(function(slide,index){
    slide.style.left=`${index*100}%`;
});
//ย้าย slide ทุกตัวไปทางซ้าย
function silder(){
    slides.forEach(function(curvel){
        curvel.style.transform=`translateX(-${count*100}%)`;
        console.log(curvel)
    })
}
//เซ็ตในการเลื่อน slide 2000=2วิ
setInterval(function(){
    count++;
    if(count==slides.length){
        count=0;
    }
    silder();
},2000)
//navbar
barIcon.addEventListener("click",function(){
    ul.classList.toggle("showitem");
    if (ul.className=="showitem") {
        barIcon.classList="fa-solid fa-xmark";
    }else{
        barIcon.className="fa-solid fa-bars";
    }
})
//
let seveTheme=localStorage.getItem('theme') || 'light';

document.body.className=seveTheme;
const toggleLight=document.getElementById('toggleLight');
const toggleDark=document.getElementById('toggleDark');

toggleLight.addEventListener('click',function(){
    document.body.classList='light';
    localStorage.setItem('theme','light');
    toggleLight.classList.add('active');
    toggleDark.classList.remove('active');
});
toggleDark.addEventListener('click',function(){
    document.body.classList='dark';
    localStorage.setItem('theme','dark');
    toggleDark.classList.add('active');
    toggleLight.classList.remove('active');
});

if(seveTheme==='light'){
    toggleLight.classList.add('active');
}else{
    toggleDark.classList.add('active');
}


//@media only screen and (max-width:840px){
//     nav ul{
//         display: none;
//     }
//     #bar{
//         display: block;
//     }
// }