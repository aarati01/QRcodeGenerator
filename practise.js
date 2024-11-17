import inquirer from 'inquirer';
import express from 'express';

const app = express();
const PORT = 3000;

// Questions for the resume
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What's your email address?",
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
  },
  {
    type: 'input',
    name: 'education',
    message: "Where did you study (e.g., University of XYZ, Degree)?",
  },
  {
    type: 'input',
    name: 'experience',
    message: "Describe your latest job experience (e.g., Role at Company)?",
  },
  {
    type: 'checkbox',
    name: 'skills',
    message: "What are your skills? (Use space to select)",
    choices: ['JavaScript', 'Node.js', 'React', 'HTML', 'CSS', 'Others'],
  },
];

// Run Inquirer
inquirer.prompt(questions).then((answers) => {
  const resumeHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Interactive Resume</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          line-height: 1.6;
        }
        h1 {
          color: #333;
        }
        .resume-section {
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <h1>Resume</h1>
      <div class="resume-section">
        <strong>Name:</strong> ${answers.name}
      </div>
      <div class="resume-section">
        <strong>Email:</strong> ${answers.email}
      </div>
      <div class="resume-section">
        <strong>Phone:</strong> ${answers.phone}
      </div>
      <div class="resume-section">
        <strong>Education:</strong> ${answers.education}
      </div>
      <div class="resume-section">
        <strong>Experience:</strong> ${answers.experience}
      </div>
      <div class="resume-section">
        <strong>Skills:</strong> ${answers.skills.join(', ')}
      </div>
    </body>
    </html>
  `;

  app.get('/', (req, res) => {
    res.send(resumeHTML);
  });

  app.listen(PORT, () => {
    console.log(`Your resume is ready! Open http://localhost:${PORT} in your browser.`);
  });
});
