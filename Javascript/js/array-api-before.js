// Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.toString());
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(', '));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2));
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
      students.forEach(x=>{
          if(x.score===90) console.log(x);
      });
  }
  
  // Q6. make an array of enrolled students
  {
      const students2=[];
      for(let i=0;i<students.length;i++){
        if(students[i].enrolled===true){
            students2.push(students[i]);
        }
      }
      console.log(students2);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      // 1
      const array=[];
      for(let student of students){
          array.push(student.score);
      }
      console.log(array);
      // 2
      console.log(students.map(x=>x.score));
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      // 1 
      let check=false;
      for(let student of students){
          if(student.score<50){
              check=true;
              break;
          }
      };
      console.log(check);
      // 2
      console.log(students.some(x=>{return x.score<50}));
  }
  
  // Q9. compute students' average score
  {
      let sum=0;
      for(let student of students){
          sum+=student.score;
      }
      console.log(sum/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      // 1
      let string='';
      for(let i=0;i<students.length;i++){
          string+=students[i].score;
          if(i>=students.length-1) break;
          string+=', ';
      };
      console.log(string);
      // 2
      console.log(students.map(x=>x.score).join(', '));
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      console.log(students.sort((a, b)=>a.score-b.score).map(x=>x.score).join(', '));
  }