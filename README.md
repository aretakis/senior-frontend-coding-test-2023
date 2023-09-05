# Senior front-end developer coding test

## Introduction

Welcome!

This coding test is one step in the front-end recruitment process at Econans. The purpose of the test is for Econans to get a better understanding of the candidate's knowledge, experience and style of programming. The main goal of the test is not to write a perfect or complete application, but rather to showcase how the candidate handles and reasons about these types of challenges.

The evaluation will place emphasis on whether the candidate can argue for the decisions made along the way. Furthermore, it is up to the candidate to choose their focus area in the task to highlight their interest or special knowledge. If one wants to showcase an appealing graphical presentation, they can do so. If one is passionate about clean code or architecture, they can focus on that in their solution.

## About this repository

This repository offers a development environment using [Vite](https://vitejs.dev) and requires Node v18 to run. All the needed dependencies and configurations are included so that the focus can be on solving the task.

We have chosen to include some tools that we use at Econans to give a feel for our daily work environment:

- [Emotion](https://emotion.sh/docs/introduction) (styling)
- [Playwright](https://playwright.dev/) (end-to-end testing)

Some boilerplate code is included but feel free to delete anything that is not needed.

## Requirements

The application must be written using React and TypeScript. You will communicate with an API called [OMDb API (The Open Movie Database)](http://www.omdbapi.com/) that provides movies, series and episodes based on a given search criteria.

**A key is required to use the API and we have registered one for you: `e10af0d4`.**

## Task

The task is to create an application where you can search for movies based on title from OMDb. The search result should then be presented in a list with an image and title (and optional additional information).

In addition, we would like you to enhance the application further with one or more of the ideas below:

- Navigation to a detail page for each item
- Filtering of the results
- Sorting of the results
- Ability to choose different list layouts, for example "compact" or "detailed"

Also, create at least one relevant test with Playwright to verify the part of your code that you consider most appropriate.

How to:

1. Fork the git repository [https://github.com/Econans/senior-frontend-coding-test-2023](https://github.com/Econans/senior-frontend-coding-test-2023). Clone your new repo to your computer.
2. Familiarize yourself with the [OMDb API](http://www.omdbapi.com/).
3. Solve the task described above.
4. Describe and document your solution in README.md.
5. Push your code to your own forked repo. Send an email to [Mikael Karlsson](mailto:mikael.karlsson@econans.se) for assessment.

## Questions

If there are any questions or uncertainties during the work, the candidate is first and foremost allowed to make assumptions. It is important that these assumptions are clearly stated in the form of comments in the code or in the presentation of the task. If it is not possible to make an assumption, questions can be asked to [Mikael Karlsson](mailto:mikael.karlsson@econans.se).
