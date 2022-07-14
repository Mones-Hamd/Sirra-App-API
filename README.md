# Sirra-App-API 
----
### Description : 
<p>Sirra app is an app that the user can interact with by choosing the current feeling that he/she feels, and the app shows suggestions that fit with the chosen feeling ,and the suggestions are web pages fwtched by the API's of several companies ,websites,or newspeapers .</p> 
 
### Demo:
https://mones-hamd.github.io/Sirra-App-API/index.html

#### Must Have : 
<li>create project structure</li>
<li>create single html page
<li>create welcome page 
<li> create selection element help user to define his feeling
<li>fetch API form weather API
<li> fetch API from New York Times 
<li>add search bare for searching about specifi article
<li> add back button 

#### Nice to have :
<li>  create local storage to storage user name .
<li> fetch more API that help user more 
<li> add more feelings options .

<li>add feature to filter results in news API .


### app structur :
    .
    |                                    #front_end_part
    |--public
    |  |--img
    |  |--style.css
    |  
    |--reademe.md
    |--index.html
    |--src                                #javascript_part
    |  |
    |  |--app.js
    |  |--constant.js
    |  |--views                           #front_end_DOM
    |  |  |--loginView.js
    |  |  |--welcomeView.js 
    |  |  |--weatherView.js
    |  |  |--newsView.js
    |  |  |--backButtonView.js
    |  |--pages             #logic_part
    |  |  |--loginPage.js
    |  |  |--welcomePage.js
    |  |  |--weatherPage.js
    |  |  |--newsPage.js
    |  |  |--backButtonPage.js
    |  |--lib
    |  |  |--localStorage.js
    |  |--services
    |  |  |--fetchAPI.js

