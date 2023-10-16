#!/bin/bash

# Set the path to the docker-compose executable
DOCKER_COMPOSE_PATH=/path/to/docker-compose

# Check if docker-compose is available
if command -v "$DOCKER_COMPOSE_PATH" &> /dev/null
then
    # docker-compose is available, so run your commands
    $DOCKER_COMPOSE_PATH up -d
else
    # docker-compose is not available
    echo "Error: docker-compose not found. Please make sure it's installed and in your PATH."
    exit 1
fi
