#!/bin/sh

# set git config
git config --global user.email "nicholas@nicholasodonnell.com"
git config --global user.name "Nicholas O'Donnell"

# clone gh-pages branch
git clone --branch gh-pages https://$1@github.com/$GITHUB_REPOSITORY.git /gh-pages

# update gh-pages branch with changes
echo "synching /public directory"
find /gh-pages -type f ! -name "CNAME" ! -path "*.git/*" -delete
mv -f $GITHUB_WORKSPACE/public/* /gh-pages

# set working dir
cd /gh-pages

# push gh-pages branch
git add --all
git commit --allow-empty --message="Publish $GITHUB_SHA"
git push --force https://$1@github.com/$GITHUB_REPOSITORY.git gh-pages
