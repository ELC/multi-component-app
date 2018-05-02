#!/bin/bash
cd $1
git init
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git checkout -b build
git add .
git commit -m "Travis Build"
git remote add origin https://${GH_TOKEN}@github.com/ELC/angular-base.git > /dev/null 2>&1
git push --force --quiet --set-upstream origin build
