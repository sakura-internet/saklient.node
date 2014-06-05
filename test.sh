#!/bin/bash

cd `dirname $0`
source config.sh
node test.js "$SACLOUD_TOKEN" "$SACLOUD_SECRET"

