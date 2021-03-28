.GOAL := build

build: ./vite-vue-go-sample

./vite-vue-go-sample: main.go ./dist/index.html
	go build .

./dist/index.html: ./node_modules src/*
	yarn build

./node_modules:
	yarn

.PHONY: clean clean-all dev
clean:
	rm -rf ./vite-vue-go-sample

clean-all: clean
	rm -rf dist
