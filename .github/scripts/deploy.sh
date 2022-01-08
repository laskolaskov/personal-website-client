#!/bin/bash

npm ci
npm run build
node ./node_modules/gh-pages/bin/gh-pages.js -d build -r https://${GITHUB_ACTOR}:${token}@github.com/${GITHUB_REPOSITORY}.git > /dev/null