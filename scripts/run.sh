#!/bin/bash
docker run -p 8080:3000 -e APP_PORT=3000 -d yourname/express-web-app
