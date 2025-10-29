var arr = new Array();

update();

function update(){
    document.getElementById('arrayView').innerHTML=(arr==null||arr==undefined)?'[]':arr;
}

function addInArray(){
    var num = document.getElementById('newNumber').value;
    if(num==null||num==undefined){
        window.alert("Enter a valid number");
        return;
    }
    arr.push(num);
    update();
}
