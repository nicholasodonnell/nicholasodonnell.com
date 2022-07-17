<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="logo-light.svg">
    <img src="logo-light.svg" width="200px">
  </picture>
</p>

My personal website located at https://nicholasodonnell.com.

[![Check](https://github.com/nicholasodonnell/nicholasodonnell.com/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/nicholasodonnell/nicholasodonnell.com/actions/workflows/check.yml)&nbsp;&nbsp;&nbsp;[![Publish](https://github.com/nicholasodonnell/nicholasodonnell.com/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/nicholasodonnell/nicholasodonnell.com/actions/workflows/publish.yml)

### Requirements

- [Node](https://nodejs.org/en/)

## Installation

Install the required dependencies by running `yarn install`.

## Usage

To build production assets:
```
yarn build
```

To start the development server located on [http://localhost:3000](http://localhost:3000):
```
yarn dev
```

## Deploy

Commits to the `main` branch with be automatically deployed to the [`gh-pages`](https://github.com/nicholasodonnell/nicholasodonnell.com/tree/gh-pages) branch.
