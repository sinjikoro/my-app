FROM node:14.3-alpine

ENV PROJECT_ROOTDIR /app/

WORKDIR ${PROJECT_ROOTDIR}

COPY package.json ${PROJECT_ROOTDIR}

RUN npm install

COPY . ${PROJECT_ROOTDIR}

EXPOSE 3000

CMD ["/bin/sh", "-c", "yarn start"]
