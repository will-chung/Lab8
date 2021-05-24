# Lab 8

## Contributors
- William Chung

## Check your understanding q's
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? **Answer:** 1.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. 
**Answer:** I would not use a unit test to test this feature because it requires the interaction of several components to function successfully. The "message" feature involves both sending and receiving information and therefore cannot be easily encapsulated into a single unit. 

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters. **Answer:** I would use a unit test to test this feature because there is only a single component involved. The "max message length" feature only involves typing characters (which is presumably handled by a single function) and therefore can be encapsulated into a single unit. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true? **Answer:** I would expect the tests to be conducted via a command-line interface without any graphical user interface that allows visualizing the actions of the test. 

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case? **Answer:** 
```
beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500/');
    await page.waitForTimeout(500);
    await page.click('img[alt="settings"]');
  });
```

