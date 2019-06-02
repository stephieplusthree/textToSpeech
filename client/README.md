## Client

create new ionic app in client folder with this command...............ionic start textToSpeech tabs --type=ionic-angular

step 1: home.html
Go to ionic framework and look up input--- we want inline input. Nest the copied text into the <ion-content> tag. Make sure ion-button is added to copied text and floating into the ion-label. Create a click event with a class name of signIn. Add #password and #username to <ion-input>

step 2: home.ts
Create a action named signIn() that console.log both uname and password. Import ViewChild. Declare the variables named uname and password and set that to the ViewChild. Go to browser and enter user name and password. What you entered in the browser will get console log out on the backend. 

step 3: Generate 2 pages.... login and register

step 4: copy home.html and paste text into login.html

step 5: home.ts
Import AlertController and add alertCtrl into constructor as a parameter.
Create a function named signIn() that will take the user to the LoginPage.
Create a function named register() that will take the user to the RegisterPage.
Import both Login and Register page. 

step 6: app.module.ts
import both LoginPage and RegisterPage
add LoginPage and RegisterPage to declarations, entryComponenets

step 7: home.scss
page-home {
    #topButtons {
        display: flex;
        flex-direction: row;
    }
    #topButtons button {
        flex: 1;
    }
}

step 8: restart your front end server

step 9: test app in browser

step 10: login.html
copy text 

step 11: register.ts
paste copied text from login.html
change title to Create Account
change text from sign in to register
change class name to registerUser()

step 12: login.html
change class name to signInUser() on Sign In button

step 13: login.ts
create a signInUser method that console.log user.value and user.password
define the vari iconicables user and password
import Viewchild

step 14: register.ts
create a function named registerUser that will re the user's registered info
declare the variables user and password

step 15: go to browser, test out if we get console logs

step 16: home.html