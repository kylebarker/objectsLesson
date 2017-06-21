var classrooms = [{
    teacher: {
      name: "John Keating",
      subject: "Literature",
      age: 57
    },
    students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  },{
    teacher: {
      name: "Lillian Beauregard",
      subject: "Math",
      age: 74
    },
    students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  },{
    teacher: {
      name: "Mr. Schmidt",
      subject: "Literature",
      age: 50
    },
    students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }]


  //What is the average age of students
  var studentsAges = []

  for(var i = 0; i < classrooms.length; i++){
    for(var key in classrooms[i]["students"]) {
      studentsAges.push(classrooms[i]["students"][key]["age"])
    }
  }
  var totalStudentAges = 0;

  for(var j = 0; j < studentsAges.length; j++){
    totalStudentAges += studentsAges[j]
  }

  var averageStudentAge = totalStudentAges/studentsAges.length;
  console.log(averageStudentAge);



  //What is the average age of the teachers
  var teachersAges = []
  var totalTeacherAges = 0

  for(var i = 0; i < classrooms.length; i++){
      teachersAges.push(classrooms[i]["teacher"]["age"]);
  }

  for(var j = 0; j < teachersAges.length; j++){
    totalTeacherAges += teachersAges[j]
  }

  var averageTeacherAge = totalTeacherAges/teachersAges.length
  console.log(averageTeacherAge);


  //How many students are in a classroom for Literature
  var studentsTakingLit = 0;
  for(var i = 0; i < classrooms.length; i++){
    if(classrooms[i]["teacher"]["subject"] === "Literature"){
      studentsTakingLit += classrooms[i]["students"].length
    }
  }
  console.log(studentsTakingLit);
