#!/bin/sh

# set git config
git config --global user.email "nicholas@nicholasodonnell.com"
git config --global user.name "Nicholas O'Donnell"

# clone gh-pages branch
git clone --branch gh-pages https://$1@github.com/nicholasodonnell/nicholasodonnell.com.git /gh-pages

# update gh-pages branch with changes
echo "synching /public directory"
mv -f $GITHUB_WORKSPACE/public/* /gh-pages

# push gh-pages branch
sh -c "cd /gh-pages && git add . && git commit -m \"Publish $GITHUB_SHA\" && git push https://$1@github.com/nicholasodonnell/nicholasodonnell.com.git gh-pages --force"
