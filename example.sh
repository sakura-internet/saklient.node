#!/bin/bash

cd `dirname $0`
source config.sh
node example.js "$SACLOUD_TOKEN" "$SACLOUD_SECRET"

