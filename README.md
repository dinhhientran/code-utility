# CodeUtility

This is an open source project providing online tools to beautify, minify, convert your code. Any bug fixing, enhancements, contributions are welcome.

https://codeutility.io

* Ruby 2.6.5
* Rails 6.0.3.2
* PostgreSQL 10
* Nginx 1.x.x

# Setup development environment

Install Nginx https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/

Install Docker & Docker compose https://docs.docker.com/engine/install https://docs.docker.com/compose/install/

Set your host file
```127.0.0.1 codeutility.bar
127.0.0.1 alignhash.codeutility.bar
127.0.0.1 beautifycode.codeutility.bar
127.0.0.1 beautifyjson.codeutility.bar
127.0.0.1 beautifyjs.codeutility.bar
127.0.0.1 beautifyhtml.codeutility.bar
127.0.0.1 beautifysql.codeutility.bar

127.0.0.1 html2haml.codeutility.bar
127.0.0.1 html2jsx.codeutility.bar
127.0.0.1 html2pug.codeutility.bar
127.0.0.1 html2slim.codeutility.bar
127.0.0.1 json2yaml.codeutility.bar
127.0.0.1 css2scss.codeutility.bar

127.0.0.1 minifycss.codeutility.bar
127.0.0.1 minifyhtml.codeutility.bar
127.0.0.1 minifyjs.codeutility.bar
127.0.0.1 minifyjson.codeutility.bar
127.0.0.1 minifysql.codeutility.bar

127.0.0.1 hexencode.codeutility.bar
127.0.0.1 base64encode.codeutility.bar
```

Copy nginx development configuration file under into your nginx configuration directory.

e.g. in Ubuntu

```sudo cp nginx/codeutility_dev /etc/nginx/sites-available```

```sudo ln -s /etc/nginx/sites-available/codeutility_dev /etc/nginx/sites-enabled/codeutility_dev```

Build docker image

```docker build -t codeutility .```

Run docker image in background

```docker-compose up -d```

Login into codeutility_web container

```docker exec -it codeutility_web /bin/bash```

Bundle install & Yarn install

```bundle install && yarn install```

Start server

```rails server -b 0.0.0.0```



















