#!/bin/bash

echo "Configurando o db..."


npm install -g migrate-mongo

cd migrations
migrate-mongo down