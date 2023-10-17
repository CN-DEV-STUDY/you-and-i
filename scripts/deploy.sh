#!/bin/bash

docker stop $(docker ps -a -q)
sleep 3
docker rm $(docker ps -aq)
sleep 3
docker rmi nohyunha95/you-and-i-frontend
sleep 3

sudo chmod 777 .env

docker-compose up -d
## Set the path to the docker-compose executable
#DOCKER_COMPOSE_PATH=$(command -v docker-compose)
#
## Check if docker-compose is available
#if [ -x "$DOCKER_COMPOSE_PATH" ]
#then
#    # docker-compose is available, so run your commands
#    $DOCKER_COMPOSE_PATH up -d
#else
#    # docker-compose is not available
#    echo "Error: docker-compose not found. Please make sure it's installed and in your PATH."
#    exit 1
#fi
