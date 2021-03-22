FROM ubuntu:18.04
MAINTAINER "dinhientrn@gmail.com"
ARG DEBIAN_FRONTEND=noninteractive
RUN useradd -r ubuntu

RUN apt-get clean && apt-get update
RUN apt-get upgrade -y

RUN apt-get install -y software-properties-common wget apt-utils git openssl

# install ruby
RUN apt install -y build-essential libssl-dev libreadline-dev zlib1g-dev libpq-dev iputils-ping lsof
RUN git clone https://github.com/rbenv/ruby-build.git && \
  PREFIX=/usr/local ./ruby-build/install.sh && \
  ruby-build -v 2.6.5 /usr/local && gem install bundler

# install php
RUN apt-add-repository -y ppa:ondrej/php
RUN apt-get clean && apt-get update
RUN apt-get -y --allow-unauthenticated install php5.6
RUN apt-get -y --allow-unauthenticated install php7.0

# install python & black
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get clean && apt-get update
RUN apt-get -y install python3.7
RUN apt-get -y install python3-pip
RUN python3.7 -m pip install black

# install clang-format 3.8
RUN apt-get -y install clang-format

# install go
RUN apt-get -y install golang

# install node, npm & yarn
RUN apt-get clean && apt-get update
RUN apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get -y install nodejs
RUN npm --version
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get clean && apt-get update && apt-get install yarn

# install js-beautify
RUN npm -g install js-beautify

# install prettier
RUN npm -g install prettier

# install prettydiff
RUN npm -g install prettydiff

# install json2yaml
RUN npm install -g json2yaml

# install sql-minify
RUN npm install -g sql-minify

# install rubocop
RUN gem install rubocop

# install sqlparse
RUN python3.7 -m pip install sqlparse
RUN alias python=python3.7

WORKDIR /app

