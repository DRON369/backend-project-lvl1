# Install dependencies
install:
	npm ci

# Run games
brain-games:
	node bin/brain-games.js

# Publish package on local
publish:
	npm publish --dry-run

# Check project with eslint
lint:
	npx eslint .