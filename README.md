# JavaScript_Fundamentals
## Assignment: Learner Submissions Data Processing

### Overview
This project processes a dataset of learners' assignment submissions, validating and calculating scores with specific criteria. Using helper functions, the program filters and groups learner submissions by their IDs, validates assignment information, and applies score deductions for late submissions. Finally, it computes each learner's assignment scores and average scores, returning the output in a structured format.

### Features
- Validation: Verifies if assignments match a course and ensures each assignment has valid points.
- Grouping: Groups learner submissions by learner ID for structured processing.

- Score Calculation:
* Calculates individual assignment scores.
* Deducts 10% from scores if assignments are submitted late.
* Computes the average score for each learner based on all valid submissions.
- Prerequisites
Node.js installed locally to run the JavaScript code.

### File Structure
- script.js: The main script file containing:
- Helper functions for validation and grouping.
- Main function getLearnerData that processes the submissions, applies late penalties, and calculates average scores.

### Functions
1. validationOfAssignmentGroup(courseInfo, assignmGroup)
Checks if assignmGroup's course_id matches courseInfo.id.
Validates each assignment’s points_possible value.
Returns the assignment group if valid, otherwise returns null.
2. groupSubmissionsByLearner(submissions)
Groups submissions by learner_id.
Returns an object with each learner ID as a key containing an array of their submissions.
3. getLearnerData(course, ag, submissions)
Integrates validation and grouping functions.
Filters out future assignments and applies a 10% deduction for late submissions.
Calculates each learner's average score and organizes output with id as the first key.

### Usage
To use the functions:

- Define course, assignment group (ag), and submissions as input data.
- Call getLearnerData(course, ag, submissions).
- Examine the resulting array, which contains each learner's scores and average.