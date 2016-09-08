describe('Home Page', function(){


    //global variables
    var firstLoginButton = element.all(by.link('/en/login')).first();


    //Before function
    beforeEach(function(){
        jasmine.addMatchers(customMatchers);
        isAngularSite(true);
        browser.get(browser.baseUrl);
    });

    //Tests
    it('should have a title', function(){
       expect(browser.getTitle()).toEqual('Intensive workouts & individual training plans | FREELETICS');
    });

    it('should navigate to login page', function(){
        firstLoginButton.click();
        expect(browser.getCurrentUrl()).toBe('https://www.freeletics.com/en/login');
    });
})