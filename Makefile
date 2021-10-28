install: # ботва для создания воспроизводимой сборки 
	npm ci
brain-games: # для запуска брейнгамез жс
	node bin/brain-games.js
publish: # для публикации
	npm publish --dry-run
