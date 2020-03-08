# New York Times Web Application

## How to start application
1. run `yarn install` at the root project folder.
2. run `yarn start`.
3. enter to application with [http://localhost:3000](http://localhost:3000).
4. enjoy.


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

