## React Tutorial  
> React is a JavaScript Library - lightweight - used to build UI, interactive to user, making it dynamic.  
> While UI framework provides complete soultion to build the front end solution. - Angular  
> Making SPA- developed in 2011 by Facebook  
> Create SPA, ReusABLE ui COMPONENTS, Virtual DOM, JSX- React new support - Javascript along with XML in same programme.  
> Angular provides features like routing and make rest API calls in angular applications. It provides more than React stick with UI.  
> Angular forces to build single page app, Can fit either single or multi page apps.  
> Angular operates Real Browser DOM , React Operates on virtual DOM; updates the necessary part of real browser DOM which makes REACT app faster. 
> Angular supports Two way Binding, and React support one-way binding.  
In React and Angular, the concepts of one-way binding and two-way binding relate to how data flows between the component (logic) and the view (UI).  
### React (One-Way Binding)  
#### One-Way Binding:  

Data flows in a single direction, from the parent component to the child component.  
This ensures a predictable and consistent data flow, which is central to React's architecture.   
Example: The parent passes a prop to the child, and the child cannot directly modify the parent's state.  
However, the developer can manually update the property using JavaScript events such as "change" event.  

### Angular (Two-Way Binding)  
#### Two-Way Binding:  

Data flows both ways, from the view (UI) to the component (logic) and vice versa.  
Angular uses the [(ngModel)] directive for two-way binding, which automatically synchronizes the data between the input and the component.  
Angular also supports one way binding.  

## What is SPA by React?  
### SPA (Single Page Application):  

A web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without requiring a full page reload.  
React, being a library for building user interfaces, is well-suited for SPAs because of its component-based architecture and state management.  

React can be used to develop single page applications / multi page applications also.  

Single page application is an application where the page never refreshes once it is loaded into the browser.  
If the user clicks on a navigation link, just a piece of UI changes at the client itself, without needing any interaction with server.  
If any interaction is needed with server (such as inserting / updating / retrieving from database) - it will be done by making REST-API calls (HTTP Requests) asynchronously.

Multi page application is an application where a page refreshes / user can navigate to other page - leaving the current page.  
If the user clicks on a navigation link, he / she leaves the current page and navigates to other page - where the browser completely reloads all resources of the page (such as js files, css files etc.).  
If any database interaction is needed, it can either use asynchronous REST-API calls or get the updated information along with newly loaded page itself from the server.



Re-Usable Components

React allows the developers to divide the UI as piece of UI; and each individual piece of code is called as 'component'.  

A component represents a piece of code that contains programmatic logic and design logic.  

Component can be written either as a function or class; but it is recommended to create the component as a class using JavaScript (EcmaScript); and should return HTML code (design) using JSX.  

### How React Powers SPAs:  

React uses a virtual DOM to efficiently update the UI without reloading the page.  
Libraries like React Router handle navigation, allowing seamless transitions between "pages" by dynamically loading components instead of refreshing the entire page.  
Example:  

Gmail, where navigation between inbox, sent, and drafts happens without a full reload.  

### Why Angular Forces SPAs  
Angular is a framework (not just a library) that provides all the tools and structure needed for building SPAs. By default:  
Router Module: Angular's router is designed to work with SPAs, providing seamless navigation without page reloads.  
Dependency Injection: Angular's built-in services and dependency injection are optimized for SPAs.  
Two-Way Data Binding: Keeps the UI and logic synchronized without manual DOM manipulation.  
Dynamic Component Loading: Ensures that changes in the app state are reflected immediately.  
Angular "forces" SPA development because it's designed to manage complex, interactive UIs efficiently within the SPA paradigm.  

DOM

Angular operates on real browser DOM.  
Any dynamic updates based on state changes are updated directly on real browser DOM.

React operates on virtual DOM first; and then real browser DOM.  
It compares the changes made in the virtual DOM; and updates only the specific parts of real browser DOM. This feature makes React faster.  

### Which Apps Can Use Angular?
Angular is ideal for:  

Enterprise-Level Applications:  

Complex applications with multiple modules, roles, and extensive features.  
Examples: ERP systems, dashboards, and CRM tools.  
Dynamic Form-Driven Applications:  

Applications requiring heavy form inputs and validations.  
Examples: HR management systems, registration portals.  
Progressive Web Applications (PWAs):  

Angular provides built-in support for PWAs.  
Cross-Platform Applications:  

Using Ionic Framework with Angular allows building mobile apps.  

### When to Choose React:  
Small to medium-sized projects requiring flexibility.  
Apps with dynamic UIs and minimal complex business logic.  
Projects with developers familiar with JavaScript and third-party libraries.  
When to Choose Angular:  
Enterprise-grade or large-scale applications.  
Apps requiring robust structure, heavy logic, and features like forms and validations.  
Teams that prefer a full-featured, opinionated framework.  

Examples:  
React: Instagram, Airbnb, Netflix.  
Angular: Google Workspace, Upwork, PayPal.  

How to Select Between React and Angular?
### Criterion                    	React                                  |       	Angular  
Learning Curve	Easier for beginners; focuses only on UI development.| Steeper due to its opinionated structure and concepts like DI, RxJS, etc.  
Project Size	Best for smaller, flexible projects or when combined with other libraries.| Best for large-scale, complex, and enterprise-grade applications.  
Community Support	Large community with a rich ecosystem of third-party libraries (e.g., Redux, React Router).|	Strong community with extensive official tools and third-party integrations.  
Performance	Excellent performance with libraries for state management and optimization. |	Excellent for apps with heavy logic and reusable components; out-of-the-box optimizations.  
TypeScript	Optional (can use JavaScript or TypeScript).| Built-in TypeScript support for type safety.  
Development Speed	Faster setup for simple apps but slower for large projects due to reliance on additional tools.|	Faster for large projects due to built-in tooling and strict conventions.  
Maintenance	Flexible but can lead to fragmentation due to reliance on third-party libraries.| Consistent because Angular provides all necessary tools in one framework.  
---------------------------------------------------------------

## Component: 
Component is a reusable piece of UI that includes with design and functionality.  
To read data from React Object and render to user. 
It has a root level component called 'App', It may have children- like Navbar, sidemenu, page content - all can be resused on some other page.  

As you list the components the hirarchy may be formed  :   

                App
                |
Navbar   -     side menu      -    pagecontent  
               |                    |  
               menu item         Grid        signup 

  In the hirarchy the data can be trasfered from parent to child 

  ### How to build a component? 
  Component is a class and has state- which renders some data to user-this data is stored in as javaScript object.  
  and that object is called as a state. 
  Ex: Food ordering application we want to display food item and price - which is a state.  
  next we have render method which tells react how the state should be rendered to the user.  
  The render method actually returns a react element, which has tags telling how data should be rendered to user. 
  A react element is a simple javascript object that represents ui, Much like a DOM element in javascript  
  But the difference is react element is called as a virtual DOM and actual dom element is the real dom.  
  a virtual dom or react element is the dummy representation of real browser dom.  
  Making changes to virtual dom is easy and consumes very less amount of memory And updates faster in the virtual dom. 
  Suppose a react component has four text boxes and if there is a state of change for the 1st box then the react make changes only in the first text box rendering the actual dom which makes react work faster than expected. 

  ------------------------------

  ## Setting up React : 

  > we need to download node js whihc has a package manager called NPM, 
  > from which you require a package called create-react-app which is shipped by npm.  
  > we also need Babel, webpack additional packages -
> Open terminal on VSCODE or terminal
> npm install create-react-app -g //-g is we want it to be globally accessed from any location or else  
> npx create-react-app my-react-app2
>   cd my-react-app2
> npm start
> you will get src and public folder
> so go to App.js file and make changes - delete the <div> tage code and print something to see output.
> To develop application from scratch delete files inside src only
> CREATE A FILE INDEX.JS
> when you code in jsx the babel which is javaScript compiler converts into JS code
> index.js file code: we imported react, reactDOM, and also bootstrap - which works on jquery and popper.js
> ```index.js

 ---------------------------------------------------------------------------

 #### REACT JS 19  
 Step by Step  
 -b Install Node and NPM  
 - Install Vite  
 - Why vite  
     - Fast dev server and build tool  
     - Efficient production Build   
     - Simple COnfiguration  
     - Typescript support  
     - SUpports fetures like CSS Pre-Processor, CSS Modules.

  - Open Terminal
      - npm install vite --save-dev
      - npm list vite
      - npm create vite  
      - project name : ReactProject  
      - cd ReactProject
      - npm run dev
  ![image](https://github.com/user-attachments/assets/38473086-f675-462c-90f8-0c3eed7769e1)


  
  
  
  
  
  
  
  


  

 


