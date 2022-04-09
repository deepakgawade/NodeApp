FROM node:17-bullseye


WORKDIR /opt/deepak/app/

RUN apt-get update && apt-get -y install make python3 python3-pip

RUN mkdir -p /opt/kallows/app/data

# copy package.json and install dependencies first
COPY package*.json ./

RUN npm install

RUN pip install pydicom

COPY . .


# open port 8080
EXPOSE 8080

CMD [ "node", "server.js" ]
