deploy:
	aws-vault exec "aws-profile" --no-session -- sh deploy.sh