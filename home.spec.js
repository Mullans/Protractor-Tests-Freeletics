describe('Home Page', function(){


    //global variables
    var firstLoginButton = element.all(by.link('/en/login')).first();
    // var logos = element.all(by.css('.fl-logo'));

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

    it('should have two visible logos', function(){
        element.all(by.css('.fl-logo')).map(function(logoElement){
            return logoElement.isDisplayed();
        }).then(function(presentValues){
            var presentCount = 0;
            for(var i = 0; i<presentValues.length;i++){
                if(presentValues[i]==true){
                    presentCount+=1;
                }
            }
            expect(presentCount).toBe(2);
        });

    });

});