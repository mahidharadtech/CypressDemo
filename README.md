# test-lpgAssesment
Test for new job

Test Guide Document:

step 1 : Install node js latest version

step 2: Then clone the repository

step 3 : And npm i

Step 4 : Once clone and navigate to the location and run the below command to run the test

         npm run test

Step 5 : cypress window opens click on run all tests

Then test will run in the cypress window wit chrome driver - chrome browser should be installed already in computer 


# UI Tests are implemented as below: 


* Navigate to the home page and click on All inclusive

* And validate title and text

* Them click on option 2 from the day pass product section

* And click on adult pass

* Then validate discount text and - signs as prices are differs

* And also reviewin the order

* And choose and payment section - Iframe

* And complete the cardpayment details - this will fail as its production site

* Then fill the user details and click complete button




# API Test Manual Tests:


Test implemented as simple reuesting call from the given swagger

# Test Case 1 : GET LIST USERS

* 'GET', 'https://reqres.in/api/users?page=2')

* Validate status code and response


# Test Case 2 : GET SINGLE USER

* 'GET', 'https://reqres.in/api/users/2'

* Validate status code

* Validate response of the user details
