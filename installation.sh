echo 'Install npm libraries \n'
npm install
cd server-side/ && npm install && cd ..

echo 'Installing serverless cli \n'
npm install -g serverless

echo 'Configing aws credentials \n'
AWS_KEY=$(grep AWS_KEY .env | cut -d '=' -f2)
AWS_SECRETKEY=$(grep AWS_SECRETKEY .env | cut -d '=' -f2)
serverless config credentials --provider aws --key ${AWS_KEY[0]} --secret ${AWS_SECRETKEY[0]}