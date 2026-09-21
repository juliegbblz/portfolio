#!/usr/bin/env bash
# Sync assets from project root into public/
set -e
mkdir -p public
for f in julie.jpg julie2.jpg julie.jpeg fond.jpg chessmate.png wifibot.png quiz.png natation1.jpg natation2.jpg natation3.jpg Resume_Zilberberg_Julie.pdf line-art.svg; do
  if [ -e "/home/ju/Portfolio/$f" ]; then
    cp -v "/home/ju/Portfolio/$f" public/
  elif [ -e "$f" ]; then
    cp -v "$f" public/
  else
    echo "WARNING: missing $f"
  fi
done

echo "Assets synced to public/"