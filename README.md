# New York Times Web Application

## How to start application
1. run `yarn install` at the root project folder.
2. run `yarn start`.
3. enter to application with [http://localhost:3000](http://localhost:3000).
4. enjoy.
- Note: for another option you can view the app via [http://bit.ly/2Is9EZ0](http://bit.ly/2Is9EZ0) which I have deployed on Firebase.


## User Story
### Homepage
- when user enter to homepage on `/` or `/home` path, it should render current top stories from New York Times API as a card per article.
- when user click on each card, it will redirect user to `article` page
### Search Function
- when user is typing on search bar which belongs to home page.
  - it will not immediately search but wait til end of input for `1.5s`. After that the page will be locked with loading state then show most relavent results if sort filter is not apply else it should show contents following the selected filter.
  - each time page send search request articles will be replaced with 10 response results.
- when user select sort filter
  - if the search term is empty, page should stay in the same content.
  - if the search term has any text, page will request for 10 newest/oldest relates to search term. And also, replace old articles.
- when search result is applied, show more button will show at the bottom of page.
  - when user click on show more button, it will request for ten more articles with selected filter
### Article Page
- when user enter to article page on `/article/:article_id`, it will render the content along with publication date and author. it also provides `read more` hyperlink for user who want to read full content.
- when user click on back button, it will redirect user to the previous page.

## Folder Structure Description

```
|-- .babelrc // contains my own babel config
|-- .eslintrc // contains my own eslint config
|-- config-overrides.js // used to override config to write my own eslint and babel
|-- jsconfig.json // used to setup autocomplete for absolute import on vscode
  |-- src
    |-- components // a folder contains all shared and layout components (in this case just Layout)
      |-- [Component].jsx // a file contains react jsx code
      |-- [Component].module.scss // a file contain styling code for own component
      |-- [Component]Hooks.js // a file contains custom hooks for component
    |-- contexts // a folder contains context which used to be global state
      |-- [name]Hooks.js // a file provides helper function and global state
      |-- StateProvider.jsx // a file contains provider component which wrapped in app top level
    |-- pages // a folder contains page level components
      |-- [PageName] // a folder contains all code about page
        |-- [LocalComponent] // a folder contains component which only used on this page
          |-- *
        |-- [PageName].jsx // a file contains react jsx code
        |-- [PageName].module.scss // a file contain styling code for own component
        |-- [PageName]Hooks.js // a file contains custom hooks for page
    |-- services // a folder contains API call service
    |-- utils // a folder contains all helper
    |-- AppRouter.jsx // a file contains path wrapper
    |-- constants.js // a file contains global constants

```