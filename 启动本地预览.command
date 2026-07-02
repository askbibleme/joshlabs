#!/bin/bash
cd "$(dirname "$0")"

PORT=8080
if lsof -i:"$PORT" >/dev/null 2>&1; then
  PORT=8081
fi

echo "Starting JoshLabs preview at http://localhost:$PORT"
echo "Press Ctrl+C to stop."
open "http://localhost:$PORT"
exec python3 -m http.server "$PORT"
