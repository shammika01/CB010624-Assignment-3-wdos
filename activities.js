if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./serviceWorker.js')
    .then((reg)=>{
        console.log('service worker is registered',reg)
    })
    .catch((err)=>{
        console.log('service wroker is not registred'.err);
    })
}

const localChoice=document.getElementById("localChoice");
const foreignChoice=document.getElementById("foreignChoice");

const txtOut=document.getElementById("output");
const txtNameF=document.getElementById("firstName");
const txtNameL=document.getElementById("lastName")

const btnAdd=document.getElementById("add");
const btnPlace=document.getElementById("place");
const btnReset=document.getElementById("reset")
btnPlace.addEventListener("click",place)
btnAdd.addEventListener("click",add)
btnReset.addEventListener("click",reset)


const adultS=document.getElementById('adult');
const childS=document.getElementById('child');
const child6S=document.getElementById('child6');
const child15S=document.getElementById('child15');

const threeH=document.getElementById('three');
const halfD=document.getElementById('half');
const fullD=document.getElementById('one');
const twoD=document.getElementById('two');

const annualP=document.getElementById('annual');
const foodT=document.getElementById('food');

txtOut.innerText=`Current order: 0 \n Overall order:0`
    

function place(){
        
    const adult=parseInt(adultS.value);
    const child=parseInt(childS.value);
    const child6=parseInt(child6S.value);
    const child15=parseInt(child15S.value);

    const foreignAdultPrice=3000;
    const foreignChildPrice=2500;

    const localHalfPrice=250;
    const localFullPrice=500;

    const foreignThreePrice=1000;
    const foreignHalfPrice=5000;
    const foreignFullPrice=10000;

    const annualPass=5000;
    const foodToken=500;
    

    const adultPrice=2500;
    const child15Price=1000;
    const child6Price=500;

    var heads=adult+child

    
    
    if (annualP.checked){
        var amount1=annualPass;

        if (localChoice.checked){
        
            const amount=(adult*adultPrice+child15*child15Price+child6*child6Price)
            
            if(threeH.checked){
        
                const amount2=amount+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 3 HOURS    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `
                   
            }
        
            else if(halfD.checked){
                var amount2=amount+localHalfPrice*adult+(localHalfPrice*(child15+child6))+amount1+localHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${localHalfPrice*heads}   \n                
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(fullD.checked){
                var amount2=amount+localFullPrice*adult+localFullPrice*child15+localFullPrice*child6+amount1+localFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 24 HOURS/FULL DAYY :- Rs.${localFullPrice*heads}   \n                 
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(twoD.checked){
                var amount2=amount+1000*adult+1000*child6+1000*child15+amount1+1000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration:  24 HOURS :- Rs${1000*heads}   \n            
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n


                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

                
            }
    
        }

        else if (foreignChoice.checked){
            var amount=foreignAdultPrice*adult+ foreignChildPrice*child+amount1+foreignThreePrice*heads;

            if(threeH.checked){
        
                var amount2=amount+foreignThreePrice*adult+foreignThreePrice*child+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 3 HOURS :- Rs.${foreignThreePrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

        
            }
        
            else if(halfD.checked){
                var amount2=amount+foreignHalfPrice*adult+foreignHalfPrice*child+amount1+foreignHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 12 HOURS/HALF DAY :- Rs.${foreignHalfPrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(fullD.checked){
                var amount2=amount+foreignFullPrice*adult+foreignFullPrice*child+amount1+foreignFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 24 HOURS/FULL DAY :- Rs.${foreignFullPrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(twoD.checked){
                var amount2=amount+20000*adult+20000*child+amount1+20000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 48 HOURS/2 DAYS :- Rs.${20000*heads}   \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n


                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
    
        }
    }

    else if (foodT.checked){
        var amount1=foodToken;
        if (localChoice.checked){
        
            const amount=(adult*adultPrice+child15*child15Price+child6*child6Price)
            
            if(threeH.checked){
        
                const amount2=amount+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 3 HOURS    \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `
                   
            }
        
            else if(halfD.checked){
                var amount2=amount+localHalfPrice*adult+(localHalfPrice*(child15+child6))+amount1+localHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${localHalfPrice*heads}   \n                
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(fullD.checked){
                var amount2=amount+localFullPrice*adult+localFullPrice*child15+localFullPrice*child6+amount1+localFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 24 HOURS/FULL DAYY :- Rs.${localFullPrice*heads}   \n                 
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(twoD.checked){
                var amount2=amount+1000*adult+1000*child6+1000*child15+amount1+1000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration:  24 HOURS :- Rs${1000*heads}   \n            
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n


                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

                
            }
    
        }

        else if (foreignChoice.checked){
            var amount=foreignAdultPrice*adult+ foreignChildPrice*child+amount1+foreignThreePrice*heads;

            if(threeH.checked){
        
                var amount2=amount+foreignThreePrice*adult+foreignThreePrice*child+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 3 HOURS :- Rs.${foreignThreePrice*heads}    \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

        
            }
        
            else if(halfD.checked){
                var amount2=amount+foreignHalfPrice*adult+foreignHalfPrice*child+amount1+foreignHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${foreignHalfPrice*heads}    \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(fullD.checked){
                var amount2=amount+foreignFullPrice*adult+foreignFullPrice*child+amount1+foreignFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
               Duration: 24 HOURS/FULL DAY :- Rs.${foreignFullPrice*heads}    \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(twoD.checked){
                var amount2=amount+20000*adult+20000*child+amount1+20000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 48 HOURS/2 DAYS :- Rs.20000 per head    \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n


                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
    
        }
    }

    else if ((annualP.checked) && (foodT.checked)){
        amount1=annualPass+foodToken

        if (localChoice.checked){
        
            const amount=(adult*adultPrice+child15*child15Price+child6*child6Price)
            
            if(threeH.checked){
        
                const amount2=amount+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 3 HOURS    \n
                Annual Pass: YES :- Rs.${annualPass}} per head\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `
                   
            }
        
            else if(halfD.checked){
                var amount2=amount+localHalfPrice*adult+(localHalfPrice*(child15+child6))+amount1+localHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${localHalfPrice*heads}   \n                
                Annual Pass: YES :- Rs.${annualPass}} per head\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(fullD.checked){
                var amount2=amount+localFullPrice*adult+localFullPrice*child15+localFullPrice*child6+amount1+localFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 24 HOURS/FULL DAYY :- Rs.${localFullPrice*heads}   \n                 
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(twoD.checked){
                var amount2=amount+1000*adult+1000*child6+1000*child15+amount1+1000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration:  24 HOURS :- Rs${1000*heads}   \n            
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n


                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

                
            }
    
        }

        else if (foreignChoice.checked){
            var amount=foreignAdultPrice*adult+ foreignChildPrice*child+amount1+foreignThreePrice*heads;

            if(threeH.checked){
        
                var amount2=amount+foreignThreePrice*adult+foreignThreePrice*child+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 3 HOURS :- Rs.${foreignThreePrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass}} per head\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

        
            }
        
            else if(halfD.checked){
                var amount2=amount+foreignHalfPrice*adult+foreignHalfPrice*child+amount1+foreignHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${foreignHalfPrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass}} per head\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(fullD.checked){
                var amount2=amount+foreignFullPrice*adult+foreignFullPrice*child+amount1+foreignFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
               Duration: 24 HOURS/FULL DAY :- Rs.${foreignFullPrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass}} per head\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(twoD.checked){
                var amount2=amount+20000*adult+20000*child+amount1+20000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 48 HOURS/2 DAYS :- Rs.${20000*heads}   \n
                Annual Pass: YES :- Rs.${annualPass}} per head\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n


                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
    
        }
    }
    else{
        amount1=0;

        if (localChoice.checked){
        
            const amount=(adult*adultPrice+child15*child15Price+child6*child6Price)
            
            if(threeH.checked){
        
                const amount2=amount+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 3 HOURS    \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `
                   
            }
        
            else if(halfD.checked){
                var amount2=amount+localHalfPrice*adult+(localHalfPrice*(child15+child6))+amount1+localHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${localHalfPrice*heads}   \n                
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(fullD.checked){
                var amount2=amount+localFullPrice*adult+localFullPrice*child15+localFullPrice*child6+amount1+localFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 24 HOURS/FULL DAYY :- Rs.${localFullPrice*heads}   \n                 
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(twoD.checked){
                var amount2=amount+1000*adult+1000*child6+1000*child15+amount1+1000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration:  24 HOURS :- Rs${1000*heads}   \n            
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n


                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

                
            }
    
        }

        else if (foreignChoice.checked){
            var amount=foreignAdultPrice*adult+ foreignChildPrice*child+amount1+foreignThreePrice*heads;

            if(threeH.checked){
        
                var amount2=amount+foreignThreePrice*adult+foreignThreePrice*child+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 3 HOURS :- Rs.${foreignThreePrice*heads}    \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

        
            }
        
            else if(halfD.checked){
                var amount2=amount+foreignHalfPrice*adult+foreignHalfPrice*child+amount1+foreignHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${foreignHalfPrice*heads}    \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(fullD.checked){
                var amount2=amount+foreignFullPrice*adult+foreignFullPrice*child+amount1+foreignFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 24 HOURS/FULL DAY :- Rs.${foreignFullPrice*heads}    \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n

                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
        
            else if(twoD.checked){
                var amount2=amount+20000*adult+20000*child+amount1+20000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 48 HOURS/2 DAYS :- Rs.${20000*heads}   \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n


                Dear Mr/Mrs. ${txtNameF.value} ${txtNameL.value}
                Your order has been successfully placed. \n
                Thank You.


                `

            }
    
        }


            

        
    }


}

function add(){

    const adult=parseInt(adultS.value);
    const child=parseInt(childS.value);
    const child6=parseInt(child6S.value);
    const child15=parseInt(child15S.value);

    const foreignAdultPrice=3000;
    const foreignChildPrice=2500;

    const localHalfPrice=250;
    const localFullPrice=500;

    const foreignThreePrice=1000;
    const foreignHalfPrice=5000;
    const foreignFullPrice=10000;

    const annualPass=5000;
    const foodToken=500;
    

    const adultPrice=2500;
    const child15Price=1000;
    const child6Price=500;

    var heads=adult+child

    
    
    if (annualP.checked){
        var amount1=annualPass;

        if (localChoice.checked){
        
            const amount=(adult*adultPrice+child15*child15Price+child6*child6Price)
            
            if(threeH.checked){
        
                const amount2=amount+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 3 HOURS    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `
                   
            }
        
            else if(halfD.checked){
                var amount2=amount+localHalfPrice*adult+(localHalfPrice*(child15+child6))+amount1+localHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${localHalfPrice*heads}   \n                
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(fullD.checked){
                var amount2=amount+localFullPrice*adult+localFullPrice*child15+localFullPrice*child6+amount1+localFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 24 HOURS/FULL DAYY :- Rs.${localFullPrice*heads}   \n                 
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(twoD.checked){
                var amount2=amount+1000*adult+1000*child6+1000*child15+amount1+1000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration:  24 HOURS :- Rs${1000*heads}   \n            
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n





                `

                
            }
    
        }

        else if (foreignChoice.checked){
            var amount=foreignAdultPrice*adult+ foreignChildPrice*child+amount1+foreignThreePrice*heads;

            if(threeH.checked){
        
                var amount2=amount+foreignThreePrice*adult+foreignThreePrice*child+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 3 HOURS :- Rs.${foreignThreePrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

        
            }
        
            else if(halfD.checked){
                var amount2=amount+foreignHalfPrice*adult+foreignHalfPrice*child+amount1+foreignHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 12 HOURS/FULL DA :- Rs.${foreignHalfPrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(fullD.checked){
                var amount2=amount+foreignFullPrice*adult+foreignFullPrice*child+amount1+foreignFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
               Duration: 24 HOURS/FULL DAY :- Rs.${foreignFullPrice*heads}    \n
               Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(twoD.checked){
                var amount2=amount+20000*adult+20000*child+amount1+20000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 48 HOURS/2 DAYS :- Rs.${20000*heads}   \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n





                `

            }
    
        }
    }

    else if (foodT.checked){
        var amount1=foodToken;
        if (localChoice.checked){
        
            const amount=(adult*adultPrice+child15*child15Price+child6*child6Price)
            
            if(threeH.checked){
        
                const amount2=amount+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 3 HOURS    \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `
                   
            }
        
            else if(halfD.checked){
                var amount2=amount+localHalfPrice*adult+(localHalfPrice*(child15+child6))+amount1+localHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${localHalfPrice*heads}   \n                
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(fullD.checked){
                var amount2=amount+localFullPrice*adult+localFullPrice*child15+localFullPrice*child6+amount1+localFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 24 HOURS/FULL DAYY :- Rs.${localFullPrice*heads}   \n                 
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(twoD.checked){
                var amount2=amount+1000*adult+1000*child6+1000*child15+amount1+1000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration:  24 HOURS :- Rs${1000*heads}   \n            
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n





                `

                
            }
    
        }

        else if (foreignChoice.checked){
            var amount=foreignAdultPrice*adult+ foreignChildPrice*child+amount1+foreignThreePrice*heads;

            if(threeH.checked){
        
                var amount2=amount+foreignThreePrice*adult+foreignThreePrice*child+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 3 HOURS :- Rs.${foreignThreePrice*heads}    \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

        
            }
        
            else if(halfD.checked){
                var amount2=amount+foreignHalfPrice*adult+foreignHalfPrice*child+amount1+foreignHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${foreignHalfPrice*heads}    \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(fullD.checked){
                var amount2=amount+foreignFullPrice*adult+foreignFullPrice*child+amount1+foreignFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
               Duration: 24 HOURS/FULL DAY :- Rs.${foreignFullPrice*heads}    \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(twoD.checked){
                var amount2=amount+20000*adult+20000*child+amount1+20000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 48 HOURS/2 DAYS :- Rs.${20000*heads}   \n
                Annual Pass: NO \n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n





                `

            }
    
        }
    }

    if ((foodT.checked) && (annualP.checked)){
        amount1=annualPass+foodToken

        if (localChoice.checked){
        
            const amount=(adult*adultPrice+child15*child15Price+child6*child6Price)
            
            if(threeH.checked){
        
                const amount2=amount+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 3 HOURS    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `
                   
            }
        
            else if(halfD.checked){
                var amount2=amount+localHalfPrice*adult+(localHalfPrice*(child15+child6))+amount1+localHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${localHalfPrice*heads}   \n                
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(fullD.checked){
                var amount2=amount+localFullPrice*adult+localFullPrice*child15+localFullPrice*child6+amount1+localFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 24 HOURS/FULL DAYY :- Rs.${localFullPrice*heads}   \n                 
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(twoD.checked){
                var amount2=amount+1000*adult+1000*child6+1000*child15+amount1+1000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration:  24 HOURS :- Rs${1000*heads}   \n            
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n





                `

                
            }
    
        }

        else if (foreignChoice.checked){
            var amount=foreignAdultPrice*adult+ foreignChildPrice*child+amount1+foreignThreePrice*heads;

            if(threeH.checked){
        
                var amount2=amount+foreignThreePrice*adult+foreignThreePrice*child+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 3 HOURS :- Rs.${foreignThreePrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

        
            }
        
            else if(halfD.checked){
                var amount2=amount+foreignHalfPrice*adult+foreignHalfPrice*child+amount1+foreignHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${foreignHalfPrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(fullD.checked){
                var amount2=amount+foreignFullPrice*adult+foreignFullPrice*child+amount1+foreignFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 24 HOURS/FULL DAY :- Rs.${foreignFullPrice*heads}    \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(twoD.checked){
                var amount2=amount+20000*adult+20000*child+amount1+20000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 48 HOURS/2 DAYS :- Rs.${20000*heads}   \n
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})\n 
                Food token: YES :-${foodToken} per head(${heads}) =${heads*foodToken} \n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n





                `

            }
    
        }
    }
    else{
        amount1=0;

        if (localChoice.checked){
        
            const amount=(adult*adultPrice+child15*child15Price+child6*child6Price)
            
            if(threeH.checked){
        
                const amount2=amount+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 3 HOURS    \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `
                   
            }
        
            else if(halfD.checked){
                var amount2=amount+localHalfPrice*adult+(localHalfPrice*(child15+child6))+amount1+localHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 12 HOURS/HALF DAYY :- Rs.${localHalfPrice*heads}   \n                
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(fullD.checked){
                var amount2=amount+localFullPrice*adult+localFullPrice*child15+localFullPrice*child6+amount1+localFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration: 24 HOURS/FULL DAYY :- Rs.${localFullPrice*heads}   \n                 
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(twoD.checked){
                var amount2=amount+1000*adult+1000*child6+1000*child15+amount1+1000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*2500=${adult*adultPrice}\n 
                No of child tickets: ${child} \n \n
                  No of children under 15: Rs.${child15}*1000=${child15*child15Price} \n
                  No of children under 6: Rs.${child-child15}*500=${child6*child6Price} \n \n
                Duration:  24 HOURS :- Rs${1000*heads}   \n            
                Annual Pass: YES :- Rs.${annualPass} per head(${heads})= ${heads*annualPass}\n
                Food token: NO  \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n





                `

                
            }
    
        }

        else if (foreignChoice.checked){
            var amount=foreignAdultPrice*adult+ foreignChildPrice*child+amount1+foreignThreePrice*heads;

            if(threeH.checked){
        
                var amount2=amount+foreignThreePrice*adult+foreignThreePrice*child+amount1

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 3 HOURS :- Rs.${foreignThreePrice*heads}    \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

        
            }
        
            else if(halfD.checked){
                var amount2=amount+foreignHalfPrice*adult+foreignHalfPrice*child+amount1+foreignHalfPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 12 HOURS/HALF DAY :- Rs.${foreignFullPrice*heads}    \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(fullD.checked){
                var amount2=amount+foreignFullPrice*adult+foreignFullPrice*child+amount1+foreignFullPrice*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
               Duration: 24 HOURS/FULL DAY :- Rs.${foreignFullPrice*heads}    \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n




                `

            }
        
            else if(twoD.checked){
                var amount2=amount+20000*adult+20000*child+amount1+20000*heads

                txtOut.innerText=`No of adult tickers: ${adult}*3000=${adult*foreignAdultPrice}\n 
                No of child tickets: ${child}: ${child}*2500=${child*foreignChildPrice} \n \n
                Duration: 48 HOURS/2 DAYS :- Rs.${20000*heads}   \n
                Annual Pass: NO\n
                Food token: NO\n \n
                Current order: ${amount2}  \n
                Overall order: ${amount2}  \n





                `

            }
    
        }


            

        
    }


}

function reset(){
    txtOut.innerText=`
    Current order: 0 \n
    Overall order: 0`

}