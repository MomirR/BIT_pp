// Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. 
//Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Michael acquired 50 points and failed to complete the exam.
var students = ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var points = [50, 39, 63, 72, 99, 51, 83, 59];

function correspondingGrade(students, points) {
    var grade = [];
    var finalResult = "";
    //CALCULATING GRADE
    for (i = 0; i < points.length; i++) {
        if (points[i] >= 51 && points[i] <= 60) {
            grade[i] = 6;
        } else if (points[i] >= 61 && points[i] <= 70) {
            grade[i] = 7;
        } else if (points[i] >= 71 && points[i] <= 80) {
            grade[i] = 8;
        } else if (points[i] >= 81 && points[i] <= 90) {
            grade[i] = 9;
        } else if (points[i] >= 91 && points[i] <= 100) {
            grade[i] = 10;
        } else {
            grade[i] = points[i];
        }
    }
    //PRINTING RESULT
    for (i = 0; i < students.length; i++) {
        if (points[i] <= 50) {
            finalResult = students[i] + " acquired " + points[i] + " points and failed to complete the exam.";
            console.log(finalResult);
        } else {
            finalResult = students[i] + " acquired " + points[i] + " points and earned " + grade[i] + ".";
            console.log(finalResult);
        }
    }
}
var rez = correspondingGrade(students, points);


