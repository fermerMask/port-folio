#!/bin/bash
cp package.prod.json package.json
npm install
npm run build
