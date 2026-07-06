

let index = "0";


let array= [];
let dictionary={
    "name":["Georg","Hristov"],
    "number":[1,2],
    "bool":[true,false]
} 
function idDel(idDel){
    console.log("item_"+idDel.toString());
    document.getElementById("item_"+idDel.toString()).remove();
}
function idEdit(idEdit){

document.getElementById("input_1").value=document.getElementById("text_"+idEdit.toString()).textContent;
 
document.getElementById("add_1").onclick=idEdit2;
document.getElementById("add_1").textContent="edit";
function idEdit2(){
if(document.getElementById("input_1").value){
        document.getElementById("text_"+idEdit.toString()).textContent=document.getElementById("input_1").value;
        document.getElementById("input_1").value=null;
        
        document.getElementById("add_1").onclick=add;
        document.getElementById("add_1").textContent="add";

    }else{
        alert("no text");
    }
    }

 }



function add(){
    
    
    
    if(document.getElementById("input_1").value){
    console.log(document.getElementById("input_1").value)                                   
    document.getElementById("item_box").innerHTML += `
            <div class="item" id="item_${index}">
                      <p class="text" id="text_${index}">${document.getElementById("input_1").value}</p>  
                    <button onclick="idEdit(${index})" class="edit" id="edit_${index}">edit</button>
                    <button onclick="idDel(${index})" class="del" id="del_${index}">del</button>
                </div>`;
        index++;
        document.getElementById("input_1").value=null;
    }else{
        alert("no text");
    }
}
