
let cenaAut= new Array();
cenaAut["mercedes"] = 1500000;
cenaAut["volvo"] = 1200000;
cenaAut["audi"] = 13500000;
cenaAut["bmw"] = 1400000;


function zjistiCenuAuta()
{
    let cenaAuta = 0;
    let theForm = document.forms["autosalon"];
    let vybraneAuto = theForm.elements["vyberAuta"];
    cenaAuta = cenaAut[vybraneAuto.value];
    return Number(cenaAuta);
}

var cenyBarev= new Array ();
cenyBarev["palenyLak"] = (zjistiCenuAuta()/100*5);
cenyBarev["zakladni"] = 0;
cenyBarev ["metalicka"]= (zjistiCenuAuta()/100*7);


function zjistiCenuBarvy()
{  
    var cenabarvy=0;
    var theForm = document.forms["autosalon"];
    var selectedColor = theForm.elements["selectedColor"];

    for(var i = 0; i < selectedColor.length; i++)
    {
        if(selectedColor[i].checked)
        {
            cenabarvy = cenyBarev[selectedColor[i].value];
            break;
        }
    }

    return Number(cenabarvy);
}

var cenyDoplnku= new Array ();
cenyDoplnku["parkovaciKamery"] = 10000;
cenyDoplnku["litaKola"] = 20000;
cenyDoplnku ["kozeneSedacky"]= 50000;
cenyDoplnku["tuning"]= 50000;


function zjistiCenuDoplnku()
{  
    var doplnky=0;
    var theForm = document.forms["autosalon"];
    var vybraneDoplnky = theForm.elements["doplnky"];

    for(var i = 0; i < vybraneDoplnky.length; i++)
    {
        if(vybraneDoplnky[i].checked)
        {
            doplnky = doplnky + cenyDoplnku[vybraneDoplnky[i].value];  
        }
    }

    return Number(doplnky);
}


document.querySelector('#total').addEventListener('click', function (){
    
    var divobj = document.querySelector('#totalPrice');
    divobj.textContent = "Celkova cena je:"+calculateTotal() +" kč";
    
})


function  calculateTotal(){
    var carPrice = Number(zjistiCenuAuta() + zjistiCenuBarvy() + zjistiCenuDoplnku())
    var divobj = document.querySelector('#totalPrice');
    return carPrice;
}  


function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
}

document.querySelector('#vyhodnotit').addEventListener('click',function(){
    let penize = Number(document.querySelector('#penize').value);

    if (penize >= calculateTotal()){
        document.querySelector('#vyhodnoceni').textContent= "V pořádku, zadejte Váš email a pošlete objednávku ke zpracování.";
    }else {
        document.querySelector('#vyhodnoceni').textContent= "Nemáte dostatek financí.";
    }
})

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Uz pracujeme na vaší objednávce!");
document.autosalon.email.focus();
return true;
}
else
{
alert("Zadali jste neplatnou adresu!");
document.autosalon.email.focus();
return false;
}
}