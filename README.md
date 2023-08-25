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
    <a href="https://github.com/alyona-korenkovich/FreePlayHub/issues">Issues</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is a clone of the FreeToGame store that provides free games. 

Here you will find a wide selection of free games for various platforms and genres.

### Feature:

🏡 <b>Main page with filtering and sorting</b>

The main page displays a list of games that can be filtered by platform and genre. 

Games can also be sorted by release date, popularity, and more.

🎮 <b>Game Detail Page</b>

Clicking on a game takes the user to a detailed page where detailed information about the game is available, such as title, release date, publisher, developer, genre, image, screenshots, and system requirements.

⚙ <b>User-friendly interface</b>

Through the use of ChakraUI, the components are stylistically consistent, support keyboard navigation, and follow accessibility best practices (a11y).

Moreover, loading indicators and error messages provide a more positive and informative user experience.

📱 <b>Adaptive interface</b>

The application adapts to work on different devices, including mobile screens and desktops.

✅ <b>Optimized performance</b>

To optimize the performance of the application, a data lazy loading mechanism has been implemented, which allows you to load data only as needed.

Also, the application implements caching of downloaded data with a lifetime of 5 minutes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- 🌟 Init GitHub project and start working 🌟
---
- [ ] #1 Basic project setup
  - Download, install, and configure libraries, set up file structure
  - Configure redux-store and react routing
  - Add GameList, GameCard, and ScreenshotCarousel components
- [ ] #2 Filters & Sorters
  - Add GameFilter and GameSorter components, integrate them into GameList component 
- [ ] #3 Loadings & Errors
  - Add loading indicator and error display
- [ ] #4 Caching
  - Store loaded data in redux local state 
- [ ] #5 Adaptive Design
    - Add meta tags and media queries to adapt the app for mobile devices 
    - Incorporate fluid layout and responsive units
---
- 🌟 First release and deployment to GitHub Pages 🌟
---
- [ ] #6 Endless Scroller
  - Data lazy-loading and endless game list
- [ ] #7 Try-3-Times requests
  - If the request is unsuccessful, there must be three attempts to re-request
- [ ] #8 Cancel Requests
  - Cancel outdated requests when redirecting pages
- [ ] #9 Testing
  - Add unit, integration, e2e, screenshot tests
  - Add GitHub workflows and support GitHub Actions
---
- 🌟 Second release 🌟
---
- [ ] #10 Requests encapsulation in Node
  - Setup server on Node.js and encapsulate API requests
---
- 🌟 Third release and deployment to Heroku 🌟
---

See the [issues](https://github.com/alyona-korenkovich/FreePlayHub/issues) for a full list with more details.

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

* [FreeToGame - original](www.freetogame.com)
* [FreeToGame API](https://www.freetogame.com/api-doc)

<p align="right">(<a href="#readme-top">back to top</a>)</p>