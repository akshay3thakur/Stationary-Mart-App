# Stationary-Mart-App
Description
The app's primary focus is on managing and interacting with a product database. Users can insert, update, and remove products while also searching for specific products by their ID. The Help Center component offers user support through various contact methods, and the Play Screen acts as the app's central navigation point, giving users access to the main features. Finally, the View Products Screen allows users to view a list of available products.


https://github.com/akshay3thakur/Stationary-Mart-App/assets/102411963/37330d0f-f465-4f2b-a0df-b4a9df38562c

WEBSITE LINK - https://akshay3thakur.github.io/Stationary-Mart-Website/
![image](https://github.com/akshay3thakur/Stationary-Mart-App/assets/102411963/237be228-d7bd-45ac-a507-cab9ec5e2804)

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

HelpCenterScreen.js:
Function: This screen serves as a support and information hub for users. It displays a list of frequently asked questions (FAQs) related to the app's product management and provides answers to those questions. Users can also contact support through various methods like WhatsApp, Gmail, Instagram, and LinkedIn.
Use Case: Users can find answers to common queries and easily get in touch with the app's support team. 
Mechanism: The screen renders FAQs and support contact options using React Native. It uses the Linking module to enable users to contact support via WhatsApp, Gmail, Instagram, and LinkedIn.
Result: Users can access FAQs for information, and they have convenient options to reach out to support for assistance.

InsertScreen.js:
Function: The Insert Screen is responsible for managing products within the app. Users can add new products to a database, update existing product information, remove products, and search for products by ID. It enforces input validation for product details.
Use Case: Users can maintain and modify the product database efficiently through this screen. InsertScreen.js:
Mechanism: This screen allows users to input and validate product details, which are then stored or updated in a database. It uses Firebase for database operations, including inserting, updating, and removing products. It also utilizes Firebase's Realtime Database features for searching and displaying product details. 
Result: Users can add, update, and remove products, maintaining the app's product database efficiently. The search functionality allows them to find specific products by ID.


PlayScreen.js:
Function: The Play Screen acts as the central navigation point for the app. It offers options to shop for products, view available products, access the Help Center for support, and visit the app's website for online shopping. Users can explore the main features of the app from this screen.
Use Case: Users can easily navigate through the app's functionalities and access various features from a single entry point. 
Mechanism: This screen is primarily a user interface that displays images, buttons, and navigation functionality. It uses React Native to create the interface and relies on Linking to open the website link.
Result: Users can easily navigate to various app features, including shopping, viewing products, seeking support, and visiting the app's website for online shopping

ViewProductsScreen.js:
Function: This screen displays a list of available products, including their ID, name, and quantity. It provides users with a quick overview of the products stored within the app.
Use Case: Users can browse and identify products of interest in the app by viewing product details.
Mechanism: The screen displays a list of predefined products using React Native. It formats the data and provides a scrolling view for user interaction.
Result: Users can view a list of available products with their essential details, making it simple to browse and identify products they may be interested in within the app.

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
