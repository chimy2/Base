// Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    const result= fruits.join(', ');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result=fruits.split(', ');
    console.log(result);
    const result2=fruits.split(', ', 3);
    console.log(result2);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result=array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result=array.splice(0,2);
    console.log(result);
    console.log(array);
    const array2=[1, 2, 3, 4, 5];
    const result2=array2.slice(2, 5);
    console.log(result2);
    console.log(array2);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result=students.find(student=>student.score===90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    const result=students.filter(student=>student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result=students.map(student=>student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    // some : 배열 요소 중에 만족되는 값이 하나라도 있는지 알고 싶을 때 사용
    const result=students.some(student=>student.score<50);
    console.log(result);

    // every : 
    const result2=!students.every(student=>student.score>=50);
    console.log(result2);
  }
  
  // Q9. compute students' average score
  {
    const result=students.reduce((prevStudent, currStudent)=>prevStudent+currStudent.score, 0);
    console.log(result/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result=students.map(student=>student.score).join(', ');
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result=students.map(student=>student.score).sort((a, b)=>a-b).join(', ');
    console.log(result);
  }