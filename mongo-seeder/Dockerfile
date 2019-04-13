FROM alpine

ENV MONGO_HOST=127.0.0.1
ENV MONGO_PORT=27017
ENV MONGO_DB=test

RUN apk add --update mongodb-tools netcat-openbsd
COPY ./wait_for_mongo.sh .
RUN chmod 700 ./wait_for_mongo.sh

COPY . /data

CMD /bin/sh ./wait_for_mongo.sh \
    && mongoimport --host $MONGO_HOST --port $MONGO_PORT --db $MONGO_DB --type json \
    --file /data/comics.json \
    --jsonArray