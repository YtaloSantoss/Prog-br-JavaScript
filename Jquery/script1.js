//lendo
//console.log($("#novo").attr("name")); 


//modificando 
$("li").attr("name", function (i, oValue){

    return oValue + i;
})