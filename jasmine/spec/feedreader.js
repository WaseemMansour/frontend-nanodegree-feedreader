/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL defined and not empty in each object', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should has a name defined and not empty in each object', function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });

    });

    describe('The menu', function() {
        let body;
        beforeEach(function() {
            body = document.getElementsByTagName('body')[0];
        });

        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('should be hidden by default', function(){
            expect(body.matches('.menu-hidden')).toBeTruthy();
        });


        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('should have visibility changed when menu icon is clicked', function(){
            const menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(body.matches('.menu-hidden')).toBeFalsy();
            menuIcon.click();
            expect(body.matches('.menu-hidden')).toBeTruthy();
         });

    });

    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('should has at least a single .entry element', function(done){
            const entry = document.querySelector('.entry');
            expect(entry).not.toBeNull();
            done();
        });
    });


    describe('New Feed Selection', function(){
        let feedTestA, feedTestB;
        beforeEach(function(done){
            loadFeed(1, function(){
                feedTestA = document.querySelector('.feed').innerHTML;
                loadFeed(2, function(){
                    feedTestB = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('should change content', function(done){
            expect(feedTestA).not.toEqual(feedTestB);
            done();
        });

    });
}());
