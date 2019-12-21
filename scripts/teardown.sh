#!/bin/bash
TARGET=$(docker ps | grep express-web-app | awk '{print $1}')
docker stop $TARGET
docker rm $TARGET
