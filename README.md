# Stationary-Mart-App


https://github.com/akshay3thakur/Stationary-Mart-App/assets/102411963/37330d0f-f465-4f2b-a0df-b4a9df38562c

App.js description
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
