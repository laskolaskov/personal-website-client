#!/bin/bash

if [ -n "$1" ]
then
    npm ci
    npm run build
    node ./node_modules/gh-pages/bin/gh-pages.js -d build -r https://${GITHUB_ACTOR}:$1@github.com/${GITHUB_REPOSITORY}.git > /dev/null
else
    echo 'Please provide the github auth token !'
fi