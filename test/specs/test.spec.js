describe("Test suite", () => {
    
    it("First test", async () => {
        await browser.url("https://the-internet.herokuapp.com/login")
        const pageTitle = await browser.getTitle();
        
        expect(pageTitle).toEqual("The Internet")

    })
 

    it("Second test", async () => {
        await browser.url("https://the-internet.herokuapp.com/login");

        await $("input[name='username']").setValue("tomsmith")
        await $("input[name='password'] ").setValue("SuperSecretPassword!")
        await $("//button").click();

        const logInSuccessMessage = await $("div#flash.flash.success");
        await logInSuccessMessage.waitForDisplayed({timeout: 5000});

        const messageText = (await logInSuccessMessage.getText()).trim();
        console.log("Actual message text:", messageText);


        expect(messageText).toContain("You logged into a secure area!");
    })

    
})