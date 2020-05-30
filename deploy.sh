#!/bin/bash

set -e

path="registry.cn-hangzhou.aliyuncs.com/lesscap/bighero:latest"

docker build \
  --build-arg oss_access_key_id=$OSS_ACCESS_KEY_ID \
  --build-arg oss_access_key_secret=$OSS_ACCESS_KEY_SECRET \
  -t bighero .

docker tag bighero:latest $path
docker push $path

ssh lesscap "cd apps; docker-compose pull && docker-compose up -d"
