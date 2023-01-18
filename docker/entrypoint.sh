#!/bin/bash

# We sync the node_modules folder in order to mirror the host's node_modules for IDEs
# See : https://stackoverflow.com/a/52092711/10230961
rsync -arv /tmp/app/node_modules /app/
# FIXME: This is a workaround, otherwise we have the error "EADDRINUSE: address already in use /tmp/nitro/worker-24-1.sock"
rm /tmp/nitro/*.sock
pnpm run dev
