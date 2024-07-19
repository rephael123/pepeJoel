let grade;
let standing;

document.getElementById("submit").onclick = function(){
    grade = document.getElementById("userGrade").value;
    
    if(grade >100){
        standing = "Invalid Grade";
    }
    else if(grade >= 98){
        standing = "With Highest Honor";
    }
    else if(grade >= 95){
        standing = "With High Honor";
    }
    else if(grade >= 90){
        standing = "With Honor";
    }
    else if(grade >= 75){
        standing = "Passed";
    }
    else {
        standing = "Failed";
    }

    document.getElementById("myGrade").textContent = grade;
    document.getElementById("myEquivalent").textContent = standing;
}