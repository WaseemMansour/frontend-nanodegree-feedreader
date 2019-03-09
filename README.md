# FeedReader Overview

A web-based application that reads RSS feeds. It uses the Google Feed Reader API to grab RSS feeds as JSON object we can make use of. It also uses the Handlebars templating library and jQuery.


## How to run?

Download or clone this repository and open index.html file with your preferred web browser.


## Test Cases:

1. Make sure that the allFeeds variable has been defined and that it is not empty.
2. Loop through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty.
2. Loop through each feed in the `allFeeds` object and ensures it has a name defined _and_ that the name is not empty.
3. Ensure the menu element is hidden by default.
4. Ensure the menu changes visibility when the menu icon is clicked.
5. Ensure when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. Ensure when a new feed is loaded by the `loadFeed` function that the content actually changes

# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
