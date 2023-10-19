#!/bin/bash

docker stop you-and-i-frontend-container
sleep 3
docker rm you-and-i-frontend-container
sleep 3
docker rmi nohyunha95/you-and-i-frontend
sleep 3

cd /home/ec2-user/action

docker-compose -f docker-compose.yml up -d
