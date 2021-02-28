set -e

sam package --s3-bucket "bucket-name"
sam deploy --s3-bucket "bucket-name" --stack-name "stack-name" --capabilities CAPABILITY_IAM 