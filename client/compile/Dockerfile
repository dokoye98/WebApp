# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the React app
RUN npm run build

# Install 'serve' to serve the build directory
RUN npm install -g serve

# Tell Docker we are going to use port 80 for the container
EXPOSE 80

# Run the app using 'serve' and specify the port
CMD ["serve", "-s", "build", "-l", "80"]
