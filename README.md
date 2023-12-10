# Book Match Application

This is a simple Book Match MERN Stack application, in which you can find all types of books matching your search.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Theme](#theme)
- [Terms Used](#terms-used)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)


## Project Description

A MERN Stack application designed to find the books matching your search criteria.

-Fontend
The Frontend cntaines a login page with Google Auth.
The homepage comtaines a form for the query purpose and a table to display the books data (will only visible after we got the books data).
The search criteria includes a genre of the book you wanted and the rating of the books.
The Genre is a must criteria querying and the rating is optional.
Based on the results of the search query, Books will be displayed in the homepage.
The user name is stored in the localstorage as of now for greeting the user, since it is a basic app.

-Backend
The backend a simple server which sends book(s) data based on the query.
The qurey is done on a dummy books data store which is a pre-existing file.
The books that match the query will be sent back as a persponse.

## Features

- You can login to the application using Google Account.
- You can Search for books by giving the genre of the book you want.
- You can look into basic details about the books, like : rating, genres, author and the book title.
- By clicking on the Book title, you will be navigated to the Google search results of that book title.
- You can save the books you wanted by clicking on the save button (in future versions).
- You can have youre own profile for the application to track other progress (in future versions).

## Theme

I tried my best to represent the app in a different theme, Here I opted for anime called Naruto

- Its a Dark Naruto based theme
- Font Naruto Orange
- Search icon, Rotating Sharingan eye
- Here and there Kakashi Blue and Silver
- Rinnegan Purple for some components
- Sakura Pink
- Jiraya Silver, Orange and Red
- Some of the terms will represent Ninja world or Naruto

## Terms Used

- Ninja: A Warrior or Soldier 
- Konnichiwa: Hello
- Scroll: A book like object Ninja terms, can write and draw in it, some are like text books as well
- Scrolls: Plural for Scroll 
- Konoha: A village or a place

## Technologies Used

- MongoDB (Not really used)
- Express.js
- React
- Node.js

## Prerequisites

NO need to install any other external dependences.
Just install and run.

You are good to go.

## Installation

Here are just basic steps to install and run the application

Go to the directory where you want to install the application
Open the command prompt or the terminal

Run the following commands to clone, install and run the application:

```bash

git clone https://github.com/Charan2999/book-matching-app.git

cd frontend
npm install

cd ../backend
npm install
```
