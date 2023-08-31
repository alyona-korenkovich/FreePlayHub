<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/alyona-korenkovich/FreePlayHub">
    <img src="img/project_icon.png" alt="Logo" width="64" height="64">
  </a>

<h3 align="center">FreePlayHub</h3>

  <p align="center">
    A clone of the FreeToGame free games store, completed as a test task for the Avito 2023 internship
    <br />
    <br />
    <a href="https://github.com/avito-tech/frontend-trainee-assignment-2023">Project requirements</a>
    ·
    <a href="#getting-started">Getting started</a>
    ·
    <a href="#showcase">Showcase</a>
    ·
    <a href="https://github.com/alyona-korenkovich/FreePlayHub/issues?q=is%3Aissue+is%3Aclosed">Issues</a>
  </p>

  <a href="https://github.com/alyona-korenkovich/FreePlayHub/actions/workflows/frontend.yml">
    <img 
      src="https://github.com/alyona-korenkovich/FreePlayHub/actions/workflows/frontend.yml/badge.svg"
      alt="frontend-CI"
    />
  </a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>

  ## 🚀 Table of Contents
  </summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built with</a></li>
    <li><a href="#showcase">Showcase</a></li>
    <li><a href="#getting-started">Getting started</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#remarks">Remarks</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<img src="img/about_project_img.png" alt="FreePlayHub - React 18, Redux, адаптивный дизайн, кэширование страниц, полноэкранная карусель скриншотов">

This project is a clone of the FreeToGame store that provides free games. 

Here you will find a wide selection of free games for various platforms and genres.

### Features:

🏡 <b>Main page with filtering and sorting</b>

The main page displays a list of games that can be filtered by platform and genre. 

Games can also be sorted by release date, popularity, and more.

🎮 <b>Game Detail Page</b>

Clicking on a game takes the user to a game page where detailed information about the game is available, such as title, release date, publisher, developer, genre, image, screenshots, and system requirements.

⚙ <b>User-friendly interface</b>

Through the use of ChakraUI, the components are stylistically consistent, support keyboard navigation, and follow accessibility best practices (a11y).

Moreover, loading indicators and error messages provide a more positive and informative user experience.

📱 <b>Adaptive interface</b>

The application adapts to work on different devices, including mobile screens and desktops.

✅ <b>Optimized performance</b>

To optimize the performance of the application, a data lazy loading mechanism has been implemented, which allows you to load data only as needed.

Also, the application implements caching of downloaded data with a lifetime of 5 minutes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BUILT WITH -->
## Built with


* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
* ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SHOWCASE -->
## Showcase


See how pages look on desktop/mobile:

<img src="img/showcase_desktop_games_list.png" alt="Desktop mockup with games list view (list view has filters by platform & category and sorters)">
<img src="img/showcase_desktop_game_page.png" alt="Desktop mockup with page view (page has basic information about the game)">
<img src="img/showcase_mobile_list_and_gamepage.png" alt="IPhone mockup with games list view and game page view (list view has filters by platform & category and sorters, page has basic information about the game)">
<img src="img/showcase_mobile_screenshot_gallery.png" alt="IPhone mockup with game page view (gallery of screenshots showcase)">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--GETTING STARTED -->
## Getting started

### ReactJS + NestJS (Docker)

1. Clone the project
   `git clone https://github.com/alyona-korenkovich/FreePlayHub`
2. Install and run Docker
3. Go to the project's root
4. Run `docker compose up`
5. Open `localhost:3001` on your browser
   ...and enjoy FreePlayHub!

### ReactJS + NestJS (no Docker)
1. Clone the project
`git clone https://github.com/alyona-korenkovich/FreePlayHub`
2. Go to the project root
3. Touch and edit `.env` file

Create `.env` file and add the following variables:
  ```bash
  PORT_SERVER=5000
  X_RAPIDAPI_KEY=e9847a112amsha6daa9416ea8662p1adc7ajsn3d0cb03c40fb
```
3. Go to the client directory `cd client`
4. Touch and edit `.env` file

Create `.env` file and add the following variables:
  ```bash
  PORT=3001
  REACT_APP_API_URL=http://localhost:5000/games
  ```

4. Start client `npm start`
5. Go to the server directory `cd ../server`
6. Start server `npm start`
7. Open `localhost:3001` on your browser
...and enjoy FreePlayHub!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap


- 🌟 Init GitHub project and start working 🌟
---
- [x] #1 Basic project setup
  - Download, install, and configure libraries, set up file structure
  - Configure redux-store and react routing
  - Add GameList, GameCard, and ScreenshotCarousel components
- [x] #2 Filters & Sorters
  - Add GameFilter and GameSorter components, integrate them into GameList component 
- [x] #3 Loadings & Errors
  - Add loading indicator and error display
- [x] #4 Caching
  - Store loaded data about specific games in a local state 
- [x] #5 Adaptive Design
    - Add meta tags and media queries to adapt the app for mobile devices 
---
- 🌟 First release and deployment to GitHub Pages 🌟
---
- [x] #6 Endless Scroller
  - Data lazy-loading and infinite scroll
- [x] #7 Try-3-Times requests
  - If the request is unsuccessful, there must be three more attempts to re-request
- [x] #8 Cancel Requests
  - Cancel outdated requests when redirecting pages
- [x] #9 Testing
  - Add unit and a11y tests
  - Add GitHub workflows and support GitHub Actions
---
- 🌟 Second release 🌟
---
- [x] #10 Requests encapsulation in Node
  - Setup server on Node.js and encapsulate API requests
---
- 🌟 Third release 🌟
---

👀 See the [issues](https://github.com/alyona-korenkovich/FreePlayHub/issues) for a full list with more details.

😉 Also, you may be interested in seeing [pull requests](https://github.com/alyona-korenkovich/FreePlayHub/pulls?q=is%3Apr+is%3Aclosed) for detailed progress of work on features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- REMARKS -->

## Remarks
> 🟣 <b>Infinite scroll</b>
> 
> Since the given API doesn't handle `limit` parameter, I didn't found a way to make a <i>real</i> infinite scroll. 
> In fact, I fetch all the games all at once and <i>only render</i> them ten-by-ten. 
 
> 🟣 <b>Filtration and sorting</b>
>
> This feature was implemented using the given API endpoints. 
> Therefore, the implementation of the filtering and sorting itself remains on their conscience.
> What I noticed is incorrect sorting by release date.
> These shortcomings, if necessary, are simply neutralized if one independently implements sorting and filtering using standard array methods like `Array.filter()` and `Array.sort()` with appropriate callbacks passed into them.

> 🟣 <b>Caching game pages with TTL = 5 min</b>
>
> I initially created `redux slice` for this, but then I noticed that the requirements included “reloading the page”, which meant that Redux would not serve the purpose in this case.
> Next, I came up with the idea of using `sessionStorage` to store this data while the session (tab) is active, but then I thought, '<i>what if it was meant that a person could open and close a tab in those 5 minutes and game page should also be loaded from the cache</i>', so I left `localStorage`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License


Distributed under the MIT License. 

See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact


Alyona Korenkovich - tg: [@cri_decoeur](https://t.me/cri_decoeur) - al.korenkovich@mail.ru

Project Link: [github.com/alyona-korenkovich/FreePlayHub](https://github.com/alyona-korenkovich/FreePlayHub)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


Some helpful links:

* [FreeToGame - original](https://www.freetogame.com)
* [FreeToGame API](https://www.freetogame.com/api-doc)

<p align="right">(<a href="#readme-top">back to top</a>)</p>