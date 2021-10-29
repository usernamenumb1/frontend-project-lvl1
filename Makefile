install: # ботва для создания воспроизводимой сборки 
	npm ci
brain-games: # для запуска брейнгамез жс
	node bin/brain-games.js
brain-even: # для запуска брейнгамез жс
	node bin/brain-even.js
publish: # для публикации
	npm publish --dry-run
lint: # запускает линтер
	npx eslint .
