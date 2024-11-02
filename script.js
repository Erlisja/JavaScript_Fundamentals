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

//function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

function getLearnerData(course, ag, submissions) {
  const validGroupAssignments = validationOfAssignmentGroup(course, ag);
  if (validGroupAssignments === null) {
    return []; // Exit if assignment group is invalid
  }

  const result = [];
  const submissionsByLearner = groupSubmissionsByLearner(submissions);
  
  return result;
}

// create an array that returns the learner submission data in the format shown above and that filters out any assignment that is not due by the current date.
// and also calculagtes the score of the assignments based on the submission date(10% deduction from the total score if it is late).


// Helper function that calculates the valid submissions. 
//Valid submissions are considered the ones that course's id matches 

function validationOfAssignmentGroup(courseInfo,assignmGroup){
  // check if ids do not match
    // the try catch block will throw an error if the id do not match
    try {
    if (assignmGroup.course_id !== courseInfo.id){
        throw new Error (`AssignmentGroup ID ${assignmGroup.course_id} does not match with the Course with ID ${courseInfo.id}`)
      }
     
      // console.log("Course ID validation passed.");
    }catch (error){
      console.error(`Skipping Group ${error}`)
      return null  // Return early if IDs don't match
    }  

    // check if the points_possible is not valid
    // the function will return null if the points_possible is not a number or the points_possible is less than 0
      try{
      assignmGroup.assignments.forEach(assignment => {
    if (typeof assignment.points_possible !== "number" || assignment.points_possible <= 0){
      throw new Error (`Invalid points_possible ,${assignment.points_possible } points, for assignment ${assignment.id}`)

    }
  });
  // console.log("Assignments validation passed.");
  }catch (error){
    console.error(`Skipping Group !${error} `)
    return null  // Return early if points_possible is not a number or less than 0
  }
    // the function will return null if the id do not match or the points_possible is not a number or the points_possible is less than 0
    return assignmGroup
    
  }

// helper function that groups the submissions by learner_id
function groupSubmissionsByLearner(submissions){
  return submissions.reduce((acc, submission) => {
    if (!acc[submission.learner_id]) {
      acc[submission.learner_id] = [];
    }
    // Format each submission to include only the desired fields
    const formattedSubmission = {
      learner_id: submission.learner_id,
      assignment_id: submission.assignment_id,
      submitted_at: submission.submission.submitted_at,
      score: submission.submission.score
    };

    // Push the formatted submission into the correct learner array
    acc[submission.learner_id].push(formattedSubmission);
    return acc;
  }, {});
}


// Call the function and log the result to the console
console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));



