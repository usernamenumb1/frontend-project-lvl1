install: # ботва для создания воспроизводимой сборки 
	npm ci
brain-games: # для запуска брейнгамез жс
	node bin/brain-games.js
brain-even: # для запуска брейнивен жс
	node bin/brain-even.js
brain-calc: # для запуска брейнкалк жс
	node bin/brain-calc.js
publish: # для публикации
	npm publish --dry-run
lint: # запускает линтер
	npx eslint .
