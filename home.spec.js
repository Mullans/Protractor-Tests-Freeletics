describe('Home Page', function(){

    beforeEach(function(){
        jasmine.addMatchers(customMatchers);
        isAngularSite(true);
        browser.get(browser.baseUrl);
    });

    it('should have a title', function(){
       expect(browser.getTitle()).toEqual('Intensive workouts & individual training plans | FREELETICS');
    });
})