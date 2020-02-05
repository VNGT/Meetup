echo 'BACKEND \n\n'
echo 'Install npm libraries \n'
npm install

echo 'Installing serverless cli \n'
npm install -g serverless

echo 'Configuring aws credentials \n'
AWS_KEY=$(grep AWS_KEY .env | cut -d '=' -f2)
AWS_SECRETKEY=$(grep AWS_SECRETKEY .env | cut -d '=' -f2)
serverless config credentials --provider aws --key ${AWS_KEY[0]} --secret ${AWS_SECRETKEY[0]} -o

echo 'Installing server-side libraries'
cd server-side/ && npm install && npm run dynamodb-install && cd ../

echo 'Installing homebrew \n'
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

echo 'Installing AWS cli \n'
brew install awscli
chmod 755 /usr/local/lib/pkgconfig

echo '\nFRONTEND \n\n'

echo 'Setting up xcode dependency\n'
xcode-select --install
brew install watchman

echo 'Run pod instal \n'
cd client-side && npm install && cd ios/ && pod install && cd ../

echo '\n Alright!!! YOU CAN SPIN UP THE APP NOW \n'