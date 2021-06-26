[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/gimenezpablonl/plizi-social-network">
    <img src="readme/logo.png" alt="Logo">
  </a>

  <h3 align="center">Plizi - Social network</h3>

  <p align="center">
    <br />
    <a href="https://github.com/gimenezpablonl/plizi-social-network">
    <a href="https://plizi-social-network.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/gimenezpablonl/plizi-social-network/issues">Report Bug</a>
    ·
    <a href="https://github.com/gimenezpablonl/plizi-social-network/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open>
  <summary><h2 style="display: inline;">🚩 Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#credits">Credits</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> 🤔 About the Project </h2>

Plizi is a social network made just to improve my development skills.

<h3 id="built-with">🦾 Built With</h3>

* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Next.js](https://nextjs.org/)
* [ChakraUI](https://chakra-ui.com/)
* [GraphQL](https://graphql.org/)
* [FaunaDB](https://fauna.com/)


<h2 id="features"> ✨ Features </h2>

- [x] Signup & Login
- [x] Create posts
- [x] User profiles
- [ ] Posts in chronological order
- [ ] Edit and remove posts
- [ ] Like, comment and shoutout
- [ ] Edit my profile
- [ ] Add friends
- [ ] Only friend posts in home page

<!-- Getting started -->
<h2 id="getting-started">🚀 Getting started</h2>

To get a local copy up and running follow these simple steps.

<h3 id="prerequisites"> 👀 Prerequisites</h3>

* git
* yarn

<h3 id="installation"> 🔨 Installation </h3>

1. Clone the repo
   ```sh
   git clone https://github.com/gimenezpablonl/plizi-social-network.git
   ```
2. Install NPM packages
   ```sh
   cd plizi-social-network && yarn
   ```

3. Create a database in [FaunaDB](https://fauna.com/) and create an admin key (save the secret).

4. Setup database (for more information [check the script](scripts/setup.js))
   ```sh
   yarn setup
   ```
5. Paste your key secret when the script asks for it.

6. Run it
   ```sh
   yarn dev
   ```

<!-- ROADMAP -->
<h2 id="roadmap"> 🌎 Roadmap </h2>

See the [open issues](https://github.com/gimenezpablonl/plizi-social-network/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
<h2 id="contributing"> 🌱 Contributing </h2>

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
<h2 id="license"> 📕 License </h2>

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
<h2 id="contact"> 📪 Contact </h2>

Pablo Gimenez - [@gimenezpablonl](https://twitter.com/gimenezpablonl) - contact@gimenezpablo.nl

<!-- CONTACT -->
<h2 id="credits"> 🚀 Credits </h2>

* [Plizi](https://github.com/Plizi-code/plizi) Main idea and graphic resources.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/gimenezpablonl/plizi-social-network.svg?style=for-the-badge
[contributors-url]: https://github.com/gimenezpablonl/plizi-social-network/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gimenezpablonl/plizi-social-network.svg?style=for-the-badge
[forks-url]: https://github.com/gimenezpablonl/plizi-social-network/network/members
[stars-shield]: https://img.shields.io/github/stars/gimenezpablonl/plizi-social-network.svg?style=for-the-badge
[stars-url]: https://github.com/gimenezpablonl/plizi-social-network/stargazers
[issues-shield]: https://img.shields.io/github/issues/gimenezpablonl/repo.svg?style=for-the-badge
[issues-url]: https://github.com/gimenezpablonl/plizi-social-network/issues
[license-shield]: https://img.shields.io/github/license/gimenezpablonl/plizi-social-network.svg?style=for-the-badge
[license-url]: https://github.com/gimenezpablonl/plizi-social-network/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gimenezpablonl
[product-screenshot]: readme/logo.png