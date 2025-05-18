let score = prompt('Right Your Score :', )

let grade;


if(score >= 80 && score <= 100 ){
    grade = "A+"
}else if(score >= 70 && score <= 79 ){
    grade= "A";
}else if( score >= 60 && score  <= 69){
    grade= "B";
} else if(score >= 50 && score <= 59){
    grade = "C";
}else if(score >= 40 && score <= 49){
    grade = "D";
}else if(score <= 39 && score >= 33){
    grade = "E";
}else{
    grade = "F"
}


console.log( "Your Grade is :", grade)

