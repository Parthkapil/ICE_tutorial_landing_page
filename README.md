This is a landing page template made with react.js. The template is fully customizable. Even a person who doesn't even know how to code can create a professional landing page using this template.

# How to run this code?

1. clone the repository. Open the folder in VSCode or any other text editor of your choice.
2. In teminal run command
   ```
   npm install
   ```
3. To run the project, run command
   ```
   npm start
   ```

# How to make changes to the template?

- In the project directory you will find a file "data.js". You need to make changes in this file. For making the changes in a specifc component you need to change the corresponding data object in data.js.

# Where do I find videos?

- Free stock videos:
  ```
  https://www.videvo.net/
  https://www.pexels.com/search/videos/businessman/
  ```
- Free SVG files:

  ```
  https://undraw.co/illustrations
  ```

- For finding colors:
  ```
  https://www.w3schools.com/colors/colors_picker.asp
  ```

# How to deploy to Github Pages?

1. Commit the project to your own github.
2. install github pages library
   ```
   npm i gh-pages
   ```
3. In the package.json file add command

   ```
   "homepage": "http://[github_userName].github.io/[github_Repo_name]",
   ```

   In the script section add:

   ```
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   ```

4. Commit these changes to Github.'

5. run command 

   ```
   npm run deploy
   ```

6. (optional)In you github repo, go to the settings -> Page -> change source to gh-pages

# Recommended extensions for VSCode?

- vscode styled components
- es7 React/Redux
- color highlight
- prettier
- Auto Rename Tag
- Bracket pair colorizer 2

# Additional resources?

Install Node
- https://nodejs.org/en/download/

Check out

- Traversy Media on youtube
- JavaScript Mastery
- Programming knowledge
