#!/bin/bash
npm ci
npm run build
npm run deploy -- -r https://${GITHUB_ACTOR}:${TOKEN}@github.com/${GITHUB_REPOSITORY}.git > /dev/null
echo "gh-pages activated !"