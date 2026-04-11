#!/bin/bash
set -euo pipefail

# Only run in remote Claude Code web sessions
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Installing Next.js dependencies..."
cd "$CLAUDE_PROJECT_DIR/nextjs"
npm install

echo "Session start hook complete."
