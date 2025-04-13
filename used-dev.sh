#!/bin/bash
echo "スクリプト開始"
cp package.dev.json package.json
npm install
npm start

echo "スクリプト終了"
