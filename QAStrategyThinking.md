=======Where do you start?=======

-I would like to start with an exploratory testing to understand the basic funtionality of the app.
-While exploratory testing we can map the risk based on the experience and communication with the developers and stakeholders
-Next Priority will be to set an testing environment and test data 

- Once the basic setup is ready we can go ahead and start testing the CUGs/P0 (can be decided based on the communication with devs) . since this is 
a financial app and real money is envolved we can consider to test the financial calculation and backend validation 

- We can also do plan for the cross platform testing ios/android and sercurity testing .

- Once the Unit testing is completed for above sceanrios we can go ahead and do a regression testing cycle 

Regression testing  > defect logging > defect verification > sanity testing 

- After the regression we can do a UAT testing on higher envs like preprod 


=========How would you approach testing this app?=============

- I would like to take a risk based approch to test this app 

we can decide the risk areas and then outline scenarios as P0 , P1 etc 

- I would like to identify the high risk end to end journeys for ex - Login , Add funds , Buy and sell , portfolio etc 
  I would like to do a deep testing for all these sceanrios first 

- After this testing is completed we can start a regression cycle 

=======What does QA look like inside a sprint, from ticket creation through to regression?==========

- I think the QA works starts from the time a new requirement comes up from the product side.
as soon as the requirement is up , QA work starts - analysing the requirement , test data requirement , Estimation , Backlog refinement , ordering the 
stories on priorty .

- QA will analyse the ticket and find out if any additional test data is required for this ticket - if yes, we have to raise the ticket .

- QA has to estimate the ticklet and take the decision if we can take the ticlet in current sprint or not  based on the capacity.

- If capacity is availble QA will write the test cases for the story .

- And, once development is complete and test env/data is available QA will start testing the story.

- During testing if QA find any bugs , they have to raise them and quickly , fix and retest them .

- Onec the unit testing is complete for the ticket and code is available in higher env , they can start the Regression / UAT testing

- Apart from this QA has to handle other things as well - smoke testing , sanity testing ,monitoring , UAT and release support 
 
======== What does your ideal regression suite look like? ============

- regression suit should have all the P0/smoke test cases for ex - Login , funds , financial test cases , order . portfolio etc 
if these test fails we have to stop the regression and fix them first .


- Apart from this we should have all the end to end critical user journeys into the suit 
 for ex - user tries to trade a pair then order placement should be successfull.

- Apart from this we can also add cross platform testing like - iOS/Android 
 
- For devices we can take latest version of androids like version 12-17 and similar iOS versions 

- We can keep impronving the regression based on the defects 


=======What would keep you up at night about this app specifically and releasing to the public? =======

- I think the money behind the app is the reason I can test the app overnight . There could be 100s of user with real money who are trying to trade 
with real money . I small issue or bug will not only make the user experience bad but also can inccur financial losses.

- An incorrect order at an incorrect price/time can lead to someone's life 



