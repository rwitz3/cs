// function ajax(){
//     var xhttp=new XMLHttpRequest();
//     var output=document.getElementById("output");
//     xhttp.onreadystatechange=function(){
//         if (this.readyState==4&&this.status==200){
//             var response=JSON.parse(this.responseText);
//             // var output="";
//             // for(var i=0;i<response.length;i++){
//             //     output = response;
        
            
//             console.log(response); 
//             document.getElementById("output").innerHTML=response[];
//             }
//         }
        
//         xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
//         xhttp.send();
//     }
    
function ajax(url){

    return new Promise(function(resolve,reject){
        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(e){
            if(this.readyState==4){
                if(this.status==200){
                    resolve(this.response);
                }
                else{
                    reject("Error from the server"+this.status)
                }
            }

    }

    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos" ,true);
    xhttp.send();

    })};

    tasks.onclick=function(){
        //  var output=document.getElementById("output");
        // var tr=document.createElement("tr");
        var out ="<table><tr><th>SlNo</th><th>ID</th><th>Task</th><th>Status</th><th id='checkid'>Completed</th></tr>";


        ajax("https://jsonplaceholder.typicode.com/todos")
        .then(function(response){
            var response=JSON.parse(response);
            console.log(response);


            for(let i=0;i<response.length;i++){
                // out +="<td>"+response[i].userId+"</td>"+"<td>"+response[i].id+"</td>"+"<td>"+response[i].title+"</td>"+"<td>"+response[i].completed+"</td>";
                out +="<tr> <td>" + response[i].userId +"</td>" + "<td>" + response[i].id +"</td>" +"<td>" + response[i].title +"</td>" +"<td>" + response[i].completed +"</td>"+"<td> <input type='checkbox'>"+"</td>"+"</tr>";
            }
            out+="</table>"
            var table=document.getElementById("ouput");

            document.getElementById("output").innerHTML=out;
        })
        .catch(function(e){
            console.log(e);
        })
    }


function count(){

    var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
    var count = 0;
    for(i=0;i<checkboxes.length;i++)
    {
        if(checkboxes[i].checked)
        {
            count++;
        }
    }
    if(count>=5)
    {
        alert("Congrats!!! 5 Tasks have been Successfully Completed");
    }
}
