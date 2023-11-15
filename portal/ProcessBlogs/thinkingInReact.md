#### Thinking In React
## Planning a Recat To-do list

# Step 1: Component Heirarchy
Link to PDF version: https://drive.google.com/file/d/1vqu75lrQR3USPJS91-oUpNKJsC0PO2TB/view?usp=sharing 
- The first component is the parent that everything sits in. 
- The second componenet is the title and settings button. This could also be called the Header I suppose
- There is another block componenet that the To-Do entries are stored in 
- each entry is a component 
- the button at the bottom that adds a new entry is a components

# Step 3: Representation of State
The state tasks that I identified are the following:
- The number of entries in the list 
- The status of each entry in the list (completed or not)
- Contents of each entry (title, description, date, time) --> Thinking about his as making updates to an existing entry if something changes.
- Preferences/Settings

# Step 4: Where the state exists in the application
Starting at the top of the list and moving down,
The number of entries in the list will be stored in the component that all the entries are stored in. The status of each entry will also be stored in the parent that holds all the entries. The idea here is to have an objects that holds each entry and the state of each entry. The contents of an entry will be stored in the entries component so each entry is editable and can be changed. The preferences and settings will be stored in overall parent for the whole app. This way any preferences that are selected can be pushed through the entire application (dark-mode, font-size, etc.).