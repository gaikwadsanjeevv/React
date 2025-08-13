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
<img width="995" height="656" alt="image" src="https://github.com/user-attachments/assets/0a73189e-d50a-4274-9dea-c248b9398c7d" />  

---------------------------------------------------------------

React is Declarative UI programming.  
<img width="2048" height="1536" alt="image" src="https://github.com/user-attachments/assets/556eb06f-e6f8-4e9b-af37-bf263917db6e" />

## Type 'React new' in any browser and it give an readymade online React project editor sandbox environment.  
## 'Create React app' is also other another way to do.  
## Install node js and you can create by:  npm create vite@latest react-project  
- npm install  
- npm run dev
<img width="2048" height="1536" alt="image" src="https://github.com/user-attachments/assets/5edac598-4678-41bf-9f2f-5f998b038b7c" />



  

 


