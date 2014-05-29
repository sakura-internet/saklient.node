#!/bin/bash

cd `dirname $0`
source config.sh
tsc --out test.js test.ts
node test.js "$SACLOUD_TOKEN" "$SACLOUD_SECRET"

