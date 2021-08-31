#!/bin/sh

# install dependencies
yarn install --cwd $GITHUB_WORKSPACE --pure-lockfile

# run linter
yarn --cwd $GITHUB_WORKSPACE lint

# run tests
yarn --cwd $GITHUB_WORKSPACE test
