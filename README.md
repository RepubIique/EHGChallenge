# Education Horizons Coding Challenge

![](./docs/recording.gif)

## Description

For this challenge, we would like to see an application that will produce an image in which each colour occurs exactly once — with no repition and no unused colours. For the purpose of this challenge; colours are made up of three components — red, green, and blue. We require you to break each colour component into 32 steps — 8, 16, 24 .. 256 — this means you will have 32,768 discrete colours to utilise.

## Criteria of Acceptance

- There should be no reuse and or repition of a single colour.
- Each colour component should have 32 steps.
- Your colour pallette should be made up of 32,768 unique colours. Do not make use of existing graphics or files.

## Usage

In the terminal run:

1. `npm i`
2. `npm run start`

A browser window should open showing the web application.

#### Frontend

The frontend uses `React.JS` and has a normal color generation & sorting algorithm

#### Backend

If time permits, plans for the backend will utilise `Node.js` and `Express.js` framework to use more complex sorting algorithms such as `Hibert Sorting`
