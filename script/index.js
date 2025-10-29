var tabelDataBackUp;

load();

function newStu() {

    var name=prompt("Student Name");
    if(name==null) return;
    if(name==''){
        window.alert("Name cann't be null");
        newStu();
    }else{
        var student = new Array();
        student[0]=name;
        for(var i=1; i<6; i++){
            var mark = prompt(`Subject ${i} marks out of 100`);
            if(mark==null){
                window.alert("Marks can't be empty");
                resetTable();
                return;
            }else if(mark<0 || mark>100){
                window.alert("Marks should be between 0 and 100");
                i--;
            }else{
                student[i]=Number(mark);
            }
        }

        var sum=0;
        student.map((mark,index) => { if(index!=0){sum+=mark}}) ;
        student.push(sum);
        student.push(sum/((student.length-2)*100)*100);

        var table= document.getElementById('student-table');;
        var tableRow = document.createElement('tr');
        table.appendChild(tableRow);

        student.forEach((item) =>{
                var cell = document.createElement('td');
                cell.innerHTML=item;
                tableRow.appendChild(cell);
        });

        backup();
    }
}

function resetTable(){
    load();
}

function backup(){
    tabelDataBackUp= document.getElementById('student-table').innerHTML;
    localStorage.setItem('data',tabelDataBackUp);
}

function load(){
    document.getElementById('student-table').innerHTML=localStorage.getItem("data");
}