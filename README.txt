# Contributors
Project is currently following the example project structure at: https://starter.obytes.com/getting-started/project-structure/

TLDR;
ui: This folder contains all the UI components and the theme configuration. We provide minimal components with a basic obytes theme. 
You can add your own components and theme configuration here.

components: This folder contains the components of the app. mainly components used inside the app folder. 
The only difference between ui and components is that ui is more generic and can be used in any project, while components are more specific to the project.

core: This folder contains the core files, such as authentication, localization, storage, and more. It can be shared with other projects. 
That’s why we are only including modules that have nothing to do with project logic. This approach helps us share code between projects and 
also update the starter with new features.

app: This folder contains the routes of the app, along with its layout routes such as stack and tab navigation structures. 

api: This folder contains the API files. 

translations: This folder contains the translation resources files. We recommend using translation files even if you are not supporting multiple 
languages as it will help you to support multiple languages in the future and also help you to find all the strings in one place.

types: This folder contains the global types.