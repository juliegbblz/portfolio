#!/usr/bin/env bash
# Sync assets from project root into react-portfolio/public
set -e
mkdir -p react-portfolio/public
for f in julie.jpg julie2.jpg chessmate.png wifibot.png quiz.png natation1.jpg natation2.jpg natation3.jpg Resume_Zilberberg_Julie.pdf; do
  if [ -e "$f" ]; then
    cp -v "$f" react-portfolio/public/
  else
    echo "WARNING: missing $f"
  fi
done

echo "Assets synced to react-portfolio/public/"