###################################################
# Stage: base
# 
# This base stage ensures all other stages are using the same base image
# and provides common configuration for all stages, such as the working dir.
###################################################
FROM node:14 AS base
WORKDIR /usr/local/app

################## CLIENT STAGES ##################

###################################################
# Stage: client-base
#
# This stage is used as the base for the client-dev and client-build stages,
# since there are common steps needed for each.
###################################################
FROM base AS client-base
WORKDIR frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/  ./

###################################################
# Stage: client-dev
# 
# This stage is used for development of the client application. It sets 
# the default command to start the Webpack development server.
###################################################
FROM client-base AS client-dev
EXPOSE 3001
CMD ["npm", "start"]

