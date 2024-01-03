//3.use the rest countries API URL->https://restcountries.com/v3.1/all and display all the countries name,region,sub-region,population in the console.
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function()
{
    var result=JSON.parse(request.response);
   // console.log(result);
    for(let i=0;i<result.length;i++)
    {
        console.log("name: "+result[i].name+", region: "+result[i].region+", sub-region: "+result[i].subregion+", population: "+result[i].population);
    }
    }
   
