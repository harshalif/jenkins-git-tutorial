# Pull docker image from node
FROM node:20 

# create working directory
WORKDIR /deocker_volumes

# copy all the files to working directory
COPY . .

# after running above commands to build an image run this command
CMD ["node", "app.js"]
