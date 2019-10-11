#!/bin/bash

filter=$1
log_file="./logs/nodeStarterApp.log"

if [[ -n "$filter" ]]; then
    bunyan ${filter} ${log_file}
else
    bunyan ${log_file}
fi

