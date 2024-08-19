
React Dashboard with Dynamic Widgets
This project is a React-based dashboard that allows users to dynamically add and remove widgets. The application uses functional components and the useState hook to manage state. The UI is styled with Tailwind CSS, and the dashboard features a sliding panel for adding new widgets.

Features
Add Widgets: Users can add new widgets to predefined categories.
Remove Widgets: Each widget can be removed from the dashboard.
Sliding Panel: A sliding panel allows users to input widget details and select categories.

Technologies Used
React: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling the components.
JavaScript (ES6+): Language used to write the React components


Adding Widgets:
Click the + Add Widget button to open the sliding panel.
Enter the widget name and text.
Select a category from the dropdown menu.
Click the + Add Widget button to add the widget to the selected category.


Removing Widgets:
Each widget has a red "X" button in the top right corner. Click this button to remove the widget from the dashboard.
Code Overview

State Management:
categories: An array of objects, each representing a category with a list of widgets.
newWidget: An object storing the name and text for the new widget being added.
selectedCategory: A string representing the currently selected category for the new widget.
showPanel: A boolean to control the visibility of the sliding panel.


Functions:
addWidget: Adds a new widget to the selected category.
removeWidget: Removes a widget from a specific category.
setShowPanel: Toggles the visibility of the sliding panel.


Sliding Panel:
The sliding panel is hidden by default and slides in from the right when the + Add Widget button is clicked.