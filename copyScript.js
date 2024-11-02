// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  function getLearnerData(course, ag, submissions) {
  };

  // helper function that will check if the group assignment is valid

  function isValidGroupAssignment(course, grpAssgm){
    grpAssgm.forEach(assignm => {
        try{
            if(assignm.course_id !== course.id){
                throw new Error("Course ID does not match");
            }
        } catch (error){ 
            console.log(`Error: ${error.message}`);
            return null;
        }
        
        try{
            if (assignm.points_possible < 0 || typeof assignm.points_possible !== "number"){
                throw new Error("Points possible must be a positive number");
            }
        } catch (error){
            console.log(`Error: ${error.message}`);
            return null;
        }
    });
    return grpAssgm;
  }

  // helper function that will group submissioins by learner id

  function isValidSubmission (submissionLerner ){
    return submissionLerner.reduce((acc,submission) => {    
        )
  }