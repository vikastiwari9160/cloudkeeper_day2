function OnSubmit(){
    event.preventDefault();
    if(document.getElementById("Username").value==""){
        window.alert("Name can't be empty.");
        return;
    }else if(Number(document.getElementById('age').value)<18 || document.getElementById('age').value==''){
        window.alert("Age should be greater then or equal to 18");
        return;
    }
    document.querySelector('form').submit();
}