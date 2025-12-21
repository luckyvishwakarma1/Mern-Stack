let d =document.createElement('button');
d.textContent='add';
let bo= document.getElementsByTagName('body')
bo[0].appendChild(d);

 d.addEventListener('click',()=>{
    let para =document.createElement('div');
    para.textContent='this is para 1'
//    document.body.appendChild(para)
   bo[0].appendChild(para)
 });






