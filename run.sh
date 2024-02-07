# cd javascript && npm install && npm test

docker build . -t nestjs-testing
docker run -it --rm --name nestjs-testing nestjs-testing 