# Let's Meet
* **Group Project for CS4261**
---
## Getting Started 🚀
### Solution/Approach ✅
* This mobile app is a meeting platform/application where everyone can schedule study sessions for their classes or join others. This solution provides students with flexibility in both time and location when deciding their favorite study session.

### Pre-step 📣
**In order to work and run dynamo db on your local**
1. Create a file name `.env` in the root folder
2. Contact me to get secret key
3. Insert these lines into *.env*
    ```
    AWS_KEY=*CONTACT ME TO GET SECRET KEY*
    AWS_SECRETKEY=*CONTACT ME TO GET SECRET KEY*
    AWS_ENDPOINT=http://localhost:8000
    AWS_REGION=us-east-1
    ACCOUNTS_TABLE=accounts
    EVENTS_TABLE=events
    GROUPS_TABLE=groups
    ```
4. On your command line run `bash pre-setup.sh`. *ASK ME THE CREDENTIAL KEY FIRST, BEFORE RUN THIS SCRIPT*
5. To check if AWS CREDENTIAL run `cat ~/.aws/credentials`
    * It must give you back some **aws_access_key_id** and **aws_secret_access_key**.
    * If not work then you should try [manually with AWS cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
---

### Serverless Backend 🐍
* Change your directory to `server-side`
* Here are some basic commands for server-side
    * *To deploy backend services to* **DEV**
        * `npm run deploy-dev`
    * *To run local serverless on local machine*
        * `npm run local:dev`
        * *http://localhost:3000*
    * *Local DynamoDB will host at*
        * *http://localhost:8000*
        * *Or you can make a query at http://localhost:8000/shell*
    * *In order to use main dev dynamodb server on local machine*
        * Remove line **AWS_ENDPOINT=http://localhost:8000** in your *.env* file

* Here are some basic endpoints
	```
	DEV: https://u1j72jxymf.execute-api.us-east-1.amazonaws.com/dev/
	GET  /v1/test  | Test the AWS endpoint
	GET  /v1/account  | Get all client accounts from database
    ... To Be Updated
	```
* Other dashboards console
	```
	Github: https://github.com/VNGT/Meetup
	AWS Console: https://534932075808.signin.aws.amazon.com/console
    Serverless Dashboard: https://dashboard.serverless.com/tenants/tnntech/applications/let-meet/overview/service
	```
* Other Tools To Success
    * *To Visualize how DynamoDB look like on your local machine*
        * Download [DynamoDB-GUI](https://github.com/Arattian/DynamoDb-GUI-Client/releases/download/3.3.1/DynamoDbGUI-mac-3.3.1.dmg)

---
## Frontend 🖥
* For development, change your directory to `client-side`
    * *Make sure that you have react native and other support libraries to able to run this project. You can find everything at [React-Native](https://facebook.github.io/react-native/docs/getting-started)*
    * *After you got everything installed*
        ```
        npm install
        ```
    * *To run the project on your local machine*
        * First try `npm run ios`
        * If not work then try to run `npx react-native run-ios --simulator "iPhone 11 Pro Max"` on the command line
        * Otherwise:
            * Open **Xcode** and go to the folder **/client-side/Mobile/ios/** and then import file **Mobile.xcworkspace**
            * Then run the project by using the start icon.
    * **Troubleshooting**
        * [React-native troubleshoot if not able to run](https://facebook.github.io/react-native/docs/troubleshooting#content)

---
## Style Enforce/ESLINT ⭐️
* To enable eslint view (*to detect error or warning*) in your Visual Studio Code
    1. Install a plugin call **ESLint**
    2. Command + Shift + P and then `ESLint: Enable ESLint`
    3. On your VScode panel, open Problems tab to view error or warning of the file
* ESlint configuration at `.eslintrc.json` file in the root directory
* More over information of react native eslint check at [ReactNativeCommunity](https://github.com/facebook/react-native/blob/master/packages/eslint-config-react-native-community/index.js)

---
## Contributors 👥
+ 1️⃣ [Thinh Nguyen](https://github.com/thinhnguyennt7)
+ 2️⃣ [Tuan Nguyen](https://github.com/atuannguyen1101)
+ 3️⃣ [Chau Phan]()
+ 4️⃣ [Lan Le Tu]()
