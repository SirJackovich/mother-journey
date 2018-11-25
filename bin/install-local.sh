#!/usr/bin/env bash

# blow away node modules
rm -rf node_modules

# blow away gulp dist directory
rm -rf dist

# install node modules, then do bower install, then gulp build
npm install
