#!/bin/bash

#usage : scripts/deps.sh

third_party/tartJS/tools/goog/build/depswriter.py \
--root_with_prefix='./ ../../../../../' \
--output_file='deps.js'