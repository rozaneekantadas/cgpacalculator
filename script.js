var totalPoint = 0;
var totalCredit = 0;
var count = 0;
var name;
var uname;
var uid;
var udep;

function addTable(){

    var semesterTag = document.getElementById("sName");
    var creditTag = document.getElementById("sCredit");
    var gardeTag = document.getElementById("sGrade");

    var semesterName = semesterTag.value;
    var credit = creditTag.value;
    var grade = gardeTag.value;

    if(semesterName == '' || credit == '' || grade == ''){

        alert("All Fields Required");

    }else{

        var point = credit*grade;
        totalPoint += point;
        var creditTaken = parseInt(credit);
        totalCredit += creditTaken;
        count++;

        var table = document.getElementById("cgtable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = semesterName;
        cell2.innerHTML = credit;
        cell3.innerHTML = grade;

        document.getElementById("calculateButton").style.display = 'block';

    }
}

function calculatePoint(){

        var table = document.getElementById("cgtable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        var cgpa = totalPoint/totalCredit;
        var finalCgpa = cgpa.toFixed(2);

        cell1.innerHTML = "Total Semester Completed: "+count;
        cell2.innerHTML = "Total Credit: "+totalCredit;
        cell3.innerHTML = "CGPA: "+finalCgpa;

        document.getElementById("calculateButton").style.display = 'none';
        document.getElementById("printButton").style.display = 'block';
        document.getElementById("formtag").style.display = 'none';
}

function printPage(){

    var print_area = document.getElementById('col1').innerHTML;
    var orginalContent = document.body.innerHTML;
    document.body.innerHTML = print_area;
    window.print();
    document.body.innerHTML = orginalContent;
}

function addUserInfo(){

    var nameTag = document.getElementById("uname");
    var idTag = document.getElementById("uid");
    var departmentTag = document.getElementById("udepartment");
    var varsityTag = document.getElementById("uvarsity");

    name = nameTag.value;
    uname = varsityTag.value;
    uid = idTag.value;
    udep = departmentTag.value;

    if(name == '' || uname == '' || uid == '' || udep == ''){
        alert("All information required");
    }
    else{

        document.getElementById("n").innerHTML = name;
        document.getElementById("i").innerHTML = uid;
        document.getElementById("d").innerHTML = udep;
        document.getElementById("v").innerHTML = uname;

        document.getElementById("about").style.display = 'none';
        document.getElementById("cgcol").style.display = 'block';
    }

}