let titel=document.getElementById('titel');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let creat=document.getElementById('creat');
let deletAll=document.getElementById('deletAll');
let mod='creat';
let tmp;
let cont;


function calcelTotal(){
    if(price.value==''){
        total.innerHTML='0';
        total.style.background='rgb(204, 23, 23)';
    }
    else{
        let tot=[(+price.value)+(+taxes.value)+(+ads.value)+(+discount.value)];
        total.innerHTML=tot;
        total.style.background='hsl(125, 62.90%, 40.20%)';
    }
}
calcelTotal();
if(localStorage.prodoi != null){
    prdict=JSON.parse(localStorage.prodoi)
}
else{
    prdict=[]
}
function creatPro(){
    let prod={
        titel:titel.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    if(mod=='creat'){
        if(titel.value!=''&& price.value!=''&& category.value!=''){
            if(prod.count>1){
            for(let i=0;i<count.value;i++){
                prdict.push(prod);
                localStorage.setItem('prodoi',JSON.stringify(prdict));
            }
            }else{
                prdict.push(prod);
                localStorage.setItem('prodoi',JSON.stringify(prdict));
            }        
        }
    }else{
        prdict[tmp]=prod;
        localStorage.setItem('prodoi',JSON.stringify(prdict));
        mod='creat'
        count.style.display='inline-block';
        creat.innerHTML='creat';
    }
    readData()
    clearData()
}
// localStorage.clear(/'prodoi');
// prdict.splice(0);
function readData(){
    let table='';
    for(let i=0;i<prdict.length;i++){
        cont=i;
        table +=`
        <tr>
            <td>${i+1}</td>
            <td>${prdict[i].titel}</td>
            <td>${prdict[i].price}</td>
            <td>${prdict[i].taxes}</td>
            <td>${prdict[i].ads}</td>
            <td>${prdict[i].discount}</td>
            <td>${prdict[i].total}</td>
            <td>${prdict[i].category}</td>
            <td><button onclick="updateData(${i})" class="du">update</button></td>
            <td><button onclick="deletProd(${i})" class="du">delet</button></td>
        </tr>`        
       
    } 


    let tbody=document.getElementById('tbody').innerHTML=table;
    let deletAll=document.getElementById('deletAll');
    if(prdict.length>0){
        deletAll.innerHTML=`'<button onclick="deletData()" class="btn">deletAll (${cont+1})</button>'`;
    }
    else{
        deletAll.innerHTML='';
    }
}
readData();
function clearData(){
        titel.value=''
        price.value=''
        taxes.value=''
        ads.value=''
        discount.value=''
        total.innerHTML='0'
        count.value=''
        category.value=''
        total.style.background='rgb(204, 23, 23)';
}
function deletData(){
    localStorage.clear('prodoi');
    prdict.splice(0);
    readData();
}
function deletProd(i){
    prdict.splice(i,1);
    localStorage.setItem('prodoi',JSON.stringify(prdict))
    count.style.display='inline-block';
    creat.innerHTML='creat';
    readData();
}
function updateData(i){
    titel.value=prdict[i].titel
    price.value=prdict[i].price
    taxes.value=prdict[i].taxes
    ads.value=prdict[i].ads
    discount.value=prdict[i].discount
    category.value=prdict[i].category
    total.innerHTML=prdict[i].total
    total.style.background='hsl(125, 62.90%, 40.20%)';
    count.style.display='none';
    creat.innerHTML='update';
    mod='update'
    tmp=i;
    scroll({
        top:0,
        behavior:'smooth'
    })
}















document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".titr");  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // إلغاء المراقبة بعد التطبيق
        }
      });
    }, {
      threshold: 0.1 // يظهر العنصر إذا كان 10% منه مرئيًا
    });
  
    elements.forEach(element => observer.observe(element));
  });











