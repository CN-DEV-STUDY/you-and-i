#!/bin/bash

docker stop you-and-i-frontend-container
docker rm you-and-i-frontend-container
docker rmi nohyunha95/you-and-i-frontend

cd /home/ec2-user/action/frontend

docker-compose -f docker-compose.yml up -d
