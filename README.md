### Pseudocode
Below are the steps I took to do the excercise

------
1. npm install semantic-ui-react semantic-ui-css - to make it easy to create a decent layout
2. npm install axios - to fetch data
3. import 'semantic-ui-css/semantic.min.css' - into App.js to have semantic css available to the entire app
4. create components folder inside src folder
5. inside components folder create the files Users.js and UserSummary.js
6. initialise state for users, loadingUsers, teamMemberNos, lastUserAddedAt, totalUsersInvited, totalPublishedCampaigns
7. render user table 
8. render table summary which is teamMemberNos, lastUserAddedAt, totalUsersInvited, totalPublishedCampaigns
9. Add sort functionality for sorting data by date 
10. test what happens when there is no data available from the API call
