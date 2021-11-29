install: # ботва для создания воспроизводимой сборки 
	npm ci
install-games: # ботва для подключеия пакетов 
	npm link
brain-games: # для запуска брейнгамез жс
	bin/brain-games.js
brain-even: # для запуска брейнивен жс
	bin/brain-even.js
brain-calc: # для запуска брейнкалк жс
	bin/brain-calc.js
brain-gcd: # для запуска брейнgdc жс
	bin/brain-gcd.js
brain-prime: # для запуска брейнgdc жс
	bin/brain-prime.js
brain-progression: # для запуска брейнпрогрешн жс
	bin/brain-progression.js
publish: # для публикации
	npm publish --dry-run
lint: # запускает линтер
	npx eslint .
