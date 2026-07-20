# Lennox Lab Website

***Read this prior to making contributions***

To see the site locally run the following commands after cloning:
```
npm install
```
```
npm start
```

## Instructions for Group Contribution

### 1. Clone Repository
```
git clone https://github.com/robertlennox/movement-ecology.git
```
```
cd movement-ecology
```
### 2. Create and Switch to a New Branch with Your Name
```
git checkout -b <your-name>
```

### 3. Add Your Contributions
Refer to [Adding a Project](#adding-a-project) or [Adding a Person](#adding-a-person) for clean file placement and code formatting 

### 4. Add and Commit
In the same terminal you created and switched to a new branch:
```
git add .
```
```
git commit -m "Your contributions"
```

### 5. Merge Your Changes with Main
In this step you are switching back to main, pulling any new updates if applicable, and merging your changes
```
git checkout main
```
```
git pull origin main
```
```
git merge <your-branch-name>
```
Any conflicts will show up in this step. Most cases for this project, you will accept changes from BOTH your branch and main.

### 6. Push
```
git push origin main
```
## Adding A Project
Adding a project is handled through the ```src/assets/projects``` folder and ```src/data/projects.js```

### 1. Create a new project folder under ```src/assets/projects```
### 2. Place all image and video media in this new folder
### 3. Follow Instructions in ```src/data/projects.js```

## Adding A Person
Adding a person is handled through the ```src/assets/images/people``` folder and ```src/data/people.js```

### 1. Add your headshot into ```src/assets/images/people```
### 2. Follow instructions in ```src/data/people.js```