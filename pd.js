function donate(){
    
const name=document.getElementById('name').value;
const amount=document.getElementById("amount").value;
const txtOut=document.getElementById('txtOut');

document.getElementById("txtOut").innerHTML=`DONATION SUCCESSFUL!`
 
alert(`DEAR ${name}, THANK YOU FOR DONATING RS.${amount}`)
}


function addOne(){
    const order=[]

    order.push("Pot")
    localStorage.setItem("Favourite","Pot");
    localStorage.setItem("orders",order)
}

function addTwo(){
    const order=[]

    order.push("Mask")
    order.push("Mask")
    localStorage.setItem("Favourite","Mask")
    localStorage.setItem("orders",order)

    
}

function addThree(){
    const order=[]

    order.push("Kitul Mug")
    localStorage.setItem("Favourite","Kitul Mug")
    localStorage.setItem("orders",order)
}

function addFour(){
    const order=[]

    order.push("Frock")
    localStorage.setItem("Favourite","Frock")
    localStorage.setItem("orders",order)

}

function addFive(){
    const order=[]

    order.push("Wood Crafted Elephant")
    localStorage.setItem("Favourite","Wood Crafted Elephant")
    localStorage.setItem("orders",order)

}

function order(){
    document.getElementById("orderOut").innerHTML=`Current order: ${localStorage.getItem("Favourite")}`;
}


if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./serviceWorker.js')
    .then((reg)=>{
        console.log('service worker is registered',reg)
    })
    .catch((err)=>{
        console.log('service wroker is not registred'.err);
    })
}
