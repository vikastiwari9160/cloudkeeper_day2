var arr = new Array(1,2,3,4,5,6,7,3,4,5);

update();

function update(){
    document.getElementById('arrayView').innerHTML=(arr==null||arr==undefined)?'[]':arr;
}

function replace(){

    var num = document.getElementById('Number').value;
    var newNum = document.getElementById('newNumber').value;


    console.log("hello");

    if(num==null||num==undefined || newNum==null || newNum==undefined){
        window.alert("Enter a valid details");
        return;
    }
    for(var i=0; i<arr.length; i++){
        if(arr[i]==num){
            arr[i]=newNum;
        }
    }
    update();
}
