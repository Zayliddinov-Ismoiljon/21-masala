var elForm= document.querySelector(".form");
var elFirstInput=document.querySelector("#firstInput");
var elSecondInput=document.querySelector("#secondInput");
var elFirstResult= document.querySelector(".result1");
var elSecondResult= document.querySelector(".result2");
var a=[];
var c=[];


elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var elFirstValue= elFirstInput.value;
    var elSecondValue= elSecondInput.value;
    
    for(i=0; i<=elFirstValue; i++){
        var b = Math.round(Math.random() * elFirstValue ) ;
        c.push(b);
    }
    
    elFirstResult.textContent = c;
    
    
    c = c.filter(item => item != elSecondValue)
    elSecondResult.textContent=c;
    
  
    
    elFirstInput.value="";
    elSecondInput.value="";
    c = []
})








