var arr = new Array(5,10,14,88,5,10,14,88);

update();

function sort(){
    for(var i=0; i<arr.length-1; i++){
        for(var j=0; j<arr.length-1; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j+1];
                arr[j+1]=arr[j]
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    update();
}

function update(){
    document.getElementById('arrayView').innerHTML=(arr==null||arr==undefined)?'[]':arr;
}