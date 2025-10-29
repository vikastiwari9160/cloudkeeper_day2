var arr = new Array(1,2,3,4,5,6,7,8);

update();

function update(){
    document.getElementById('arrayView').innerHTML=(arr==null||arr==undefined)?'[]':arr;
}

function findIndex(){
    var num = document.getElementById('Number').value;
    if(num==null||num==undefined){
        window.alert("Enter a valid number");
        return;
    }
    for(var i=0; i<arr.length; i++){
        console.log("in function");
        if(arr[i]==num){
            document.getElementById('info').innerHTML=`the given number is present at ${i} index`;
            return;
        }
    }
    document.getElementById('info').innerHTML=`the given number is not present in the array`;
}
