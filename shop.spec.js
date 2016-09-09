describe('Shop Page', function(){
    //before each sub-describe
    beforeEach(function(){
        jasmine.addMatchers(customMatchers);
    });


    describe('Reflective Mesh Sleeveless', function(){
        //before each it
        beforeEach(function(){
            isAngularSite(false);
            browser.driver.get('https://shop.freeletics.com/collections/men/products/reflective-mesh-sleeveless');
            browser.driver.manage().window().setSize(1100,600);
        });

        //tests
        it('should change active header and div on button press',function(){
            var productDescriptionDiv = element.all(by.css('.product__description.js-producttabs:not(.mobile) h2')).map(function(descriptionHeader){
                descriptionHeader.click();
                expect(descriptionHeader).toHaveClass('is-active');
            });
        });


    });
});