var arr = new Array(5,10,14,88,5,10,14,88);

update();

function removeElement(){
    arr.shift();
    update();
}

function update(){
    document.getElementById('arrayView').innerHTML=(arr==null||arr==undefined)?'[]':arr;
}