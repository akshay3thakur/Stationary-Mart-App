# Stationary-Mart-App


https://github.com/akshay3thakur/Stationary-Mart-App/assets/102411963/37330d0f-f465-4f2b-a0df-b4a9df38562c

App.js DESCRIPTION-
The App.js file is importing the following components:
•	NavigationContainer: A component from React Navigation that provides the infrastructure for managing navigation between screens in app.
•	createNativeStackNavigator: A function from React Navigation that creates a stack navigator, which is a type of navigator that allows users to navigate between screens in a linear fashion.
•	PlayScreen, InsertScreen, ViewProductsScreen, and HelpCenterScreen: These are the custom components that represent the different screens in our app.
The App.js file then wraps the StackNavigator component in a NavigationContainer component. This tells React Navigation to manage the navigation of the app.
How Firebase is used in app to retrieve data:
1.	We have imported the Firebase SDK into app.
2.	Initialized the Firebase SDK.
3.	Taken reference to the Realtime Database.
4.	Attached a listener to the Realtime Database reference.
5.	The listener will be triggered when the data changes.
6.	Then, we have read the data from the listener
How the website is integrated into fetching the data inserted from the app
1.	Created a Firebase Realtime Database.
2.	In the app, connected the data to the Realtime Database.
3.	In the website, we have used the Firebase SDK to read the data from the Realtime Database.
4.	Displayed the data on the website.

DATA TYPES-
Column 1 - Varchar (should start with "AC-")
Functionality: This column is expected to store text values that start with "AC-".
Data Type: VARCHAR
Constraints: You can use a check constraint to ensure that the value starts with "AC-".

Column 2 - Varchar (should start with "AC-")
Functionality: This is another column for storing text values that start with "AC-".
Data Type: VARCHAR
Constraints: Similar to the first column, you can use a check constraint to enforce the value's format.

Column 3 - Float
Functionality: This column is intended for storing decimal numbers.
Data Type: FLOAT
No specific constraints, so it can store any floating-point value.

Column 4 - Varchar
Functionality: This column is for storing general text data.
Data Type: VARCHAR
No specific constraints, so it can store any text value.

Column 5 - Float
Functionality: Similar to Column 3, this column is meant for storing decimal numbers.
Data Type: FLOAT
No specific constraints, so it can store any floating-point value.
