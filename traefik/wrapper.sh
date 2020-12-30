#!/bin/bash

set -e
# read fingerprint from file.
FINGERPRINT=$(cat /certs/step/config/defaults.json | jq -r '.fingerprint' )
CA_URL=$(cat certs/step/config/defaults.json | jq -r '."ca-url"')

step ca bootstrap --ca-url "${CA_URL}" --fingerprint "${FINGERPRINT}" --install --force

update-ca-certificates

# Todo: parse and check ok else exit...
curl -sS "${CA_URL}/health"

# Just pass all commands to original entyrpoint.sh script
./entrypoint.sh "$@"
