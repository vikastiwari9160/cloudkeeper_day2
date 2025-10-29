var arr = new Array(5,10,14,88,5,10,14,88);

update();

function reverse(){
    console.log("In reverse");
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    update();
}

function update(){
    document.getElementById('arrayView').innerHTML=(arr==null||arr==undefined)?'[]':arr;
}