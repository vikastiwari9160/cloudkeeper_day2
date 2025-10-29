var arr = new Array(1,2,3,4,5,6,7);

update();

function update(){
    document.getElementById('arrayView').innerHTML=(arr==null||arr==undefined)?'[]':arr;
}

function addInArray(){
    var num = document.getElementById('newNumber').value;
    var ind = document.getElementById('index').value;
    console.log(ind);
    if(num==null||num==undefined || ind==null || ind==undefined || ind>arr.length || ind<0){
        window.alert("Enter a valid details");
        return;
    }
    arr.splice(Number(ind),0,num);
    update();
}
