# Team Members Profile Generator
Object-Oriented Programming Challenge: Team Profile Generator

## Description
A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Usage

1. Install Node.js.
2. Install the dependencies:
```
npm install
```
3. Run the following script from your terminal:
```
node index.js
```
4. Run JEST test using the following command:
```
npm test
```

## Mock-Up
The following image shows the generated HTML’s appearance and functionality.
 ![Mock-Up Image](./src/img/HMTLscreenshot.png)

## Video Walthrough
See JEST test results in the following link:
[URL](https://drive.google.com/file/d/1cu5S4dJCOstZnPFpqQt9o7IpF2pCUajZ/view)

For functional walkthrough, use the following link:
[URL](https://drive.google.com/file/d/12AOMWD35BXXKW3eGr6vh44GuqB7EcJib/view)