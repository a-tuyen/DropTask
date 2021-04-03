# Assessment Test Runner

This repository is how you will take your assessment test. From this repo you will start your test, write your solutions, and submit your answers using the command line.

It is used for both the mock as well as the real test. 

The goal for the mock test is to give you time to become familiar with the setup of workflow for this format, so that you can focus on the challenges for the real test. Therefore, please take the time to carefully follow each step. 

Due to the inclusion of embedded screenshots, we suggest you read this file in HTML format, here: 

<https://github.com/lighthouse-labs/assessment-exam-student> 

## Getting Started

Please carefully follow the instructions below to get started.

**Important Note:** If you make a mistake in performing these steps (and see unexpected behavior), you will need to RESTART from step 1 (clone the repo)!

----

1) Clone the repository

    To start, **CLONE** (do not _fork_) this repo to your local Vagrant machine, and `cd` into the folder:

    ```terminal
    git clone git@github.com:lighthouse-labs/assessment-exam-student.git
    cd assessment-exam-student
    ```

2) Install Required Packages

    Run the following command from within the project directory:

    ```terminal
    npm install --no-bin-links
    ```

    > You might run into an issue with installing the `sqlite` package, if you do try running this instead
    >    ```
    >    npm install sqlite3@4.0.9 && npm install --no-bin-links
    >    ```

----

3) Open the entire project in Visual Studio Code

    Open the entire project directory in VS Code. You should see the directory tree on the left hand side: 

    ![screenshot of vscode](https://d.pr/i/qNC5oO+)

----

4) Start the test from a terminal window

    Enter the command below to start the test:

    * **NOTE:** replace `[EXAM-TOKEN]` with the token provided on the test activity page in compass.
    * Once you start the exam, the test timer will start (typically 2-3 hours).
      * Please keep the timer in mind as you should try to accomplish as much as you an in the time period given. 
      * Submissions **_will still be accepted_** after the timer has finished, so if you didn't complete it in the alloted time, continue to work on it unitl completion!

    ```terminal
    npm run start-exam [EXAM-TOKEN]
    ```

    This command downloads the test questions to your local file system. You should see new files in the `answers/` directory.

    You should see output that looks like this (note: output may vary based on which test you are taking): 

    ```
    > assessment-exam-student@1.0.0 start-exam /path/to/assessment-exam-student
    > node start-exam.js "exam-id-here"

    Contacting Server to Start Exam "exam-id-here"

    Server Response: 5 Questions:
      Creating Question 00  (30 Points) Answer file: answers/00.js
      Creating Question 01  (30 Points) Answer file: answers/01.js
      Creating Question 02  (20 Points) Answer file: answers/02.js
      Creating Question 03  (20 Points) Answer file: answers/03.js
      Creating Question 04  (20 Points) Answer file: answers/04.js
    ```

    If you see an error, please ensure you are using the correct `[EXAM-TOKEN]` (do not include the square brackets). **You may need to re-clone and restart the process from step 1 if the problem persists!**

----

## Answering Questions (Detailed Walkthrough)

Now you're ready to start answering questions! Follow these steps carefully:

1) Expand the `answers/` directory in your code editor. 

    Note that the question numbering starts at 0.

----

2) Execute the test code

    From the command line, execute the automated tests for the first question, question 0, using the command below (question numbering starts at 0): 

    ```terminal
    npm run question 0
    ```

----

3) Read the output carefully

    Notice that none of the tests for question 0 are passing (well one of them passes by default, so you start with 2 points, no big deal!):

    ![](https://d.pr/i/rLIC/22mUQewK+)

----

4) Write some code

    Implement the code for the first function (`count`) in the question, located in `answers/00.js`.

    Run the `npm run question 0` command again to make sure you are starting to see solutions:

    ![](https://d.pr/i/NjfW/59rG0xpf+)

    Notice that your score for the question also went up. The number of automated tests passing the primary factor for how your score is calculated. 

    It is recommended that you run the `npm run question [number]` command frequently. If you score close to perfect on a question (eg: all tests pass, but you have lint errors), we suggest you move on and return to polish that code later.

----

5) Repeat for all questions

    Once you complete `question 0`, repeat these steps but this time with `question 1` (the code for which should is in `answers/01.js`). 


## Submission Grading

* You can submit questions multiple times during your development process
* Points are awarded based on how your solutions perform during evaluation
* Points are deducted for lint (style) errors
* Submissions will still be accepted after the end of the test period
