#!/bin/bash

docker stop $(docker ps -a -q)
sleep 5

docker-compose -f /home/ec2-user/action/docker-compose.yml up -d --env-file /home/ec2-user/env/.env
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
