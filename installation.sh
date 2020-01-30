echo 'Install npm libraries \n'
npm install
cd server-side/ && npm install && cd ../

echo 'Installing serverless cli \n'
npm install -g serverless

echo 'Configing aws credentials \n'
AWS_KEY=$(grep AWS_KEY .env | cut -d '=' -f2)
AWS_SECRETKEY=$(grep AWS_SECRETKEY .env | cut -d '=' -f2)
serverless config credentials --provider aws --key ${AWS_KEY[0]} --secret ${AWS_SECRETKEY[0]}

echo 'Installing AWS cli \n'
xcode-select --install
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install awscli
chmod 755 /usr/local/lib/pkgconfig

echo 'Run pod instal \n'
brew install watchman
sudo gem install cocoapods
cd client-side && cd ios/ && pod install && cd ../

echo 'Alright!!! YOU CAN SPIN UP THE APP NOW \n'