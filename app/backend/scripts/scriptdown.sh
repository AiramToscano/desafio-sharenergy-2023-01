#!/usr/bin/env bash

echo "Excluindo todo o db..."
cd migrations
migrate-mongo down