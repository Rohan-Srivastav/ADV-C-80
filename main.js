name_array=[];
function submit(){
    var display_array=[];

    
    for(var j = 1; j<=4; j++){
        var name_1=document.getElementById("name_"+j).value;
        console.log(name_1);
        name_array.push(name_1);
    
    }    
    console.log(name_array);
    
    var length_of_name_of_students_array = name_array.length;
    console.log(length_of_name_of_students_array);

    for(var k=0; k<length_of_name_of_students_array; k++){

        display_array.push("<h4>Name - "+ name_array[k]+"</h4>");
        console.log(name_array);
    }

    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var nocomma=display_array.join("  ");
    console.log(nocomma);
    document.getElementById("display_name_without_commas").innerHTML=nocomma;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}   

function sorting(){

    name_array.sort();
    console.log(name_array);

    var display_student_array_sorting = [];

    var length_of_name_of_students_array = name_array.length;
    console.log(length_of_name_of_students_array);

    for (var k=0; k < length_of_name_of_students_array; k++){
        display_student_array_sorting.push("<h4>NAME - " + name_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var nocomma = display_student_array_sorting.join(" ");
    console.log(nocomma);

    document.getElementById("display_name_without_commas").innerHTML = nocomma;
}
