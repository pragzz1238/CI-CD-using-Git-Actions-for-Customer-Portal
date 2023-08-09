# Use the official Node.js image as the base image
FROM node:14 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory to the container
COPY . .

# Build the production version of the frontend app
RUN npm run build

# Use a lightweight web server to serve the static content
FROM nginx:alpine

# Copy the built frontend files to the nginx server
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
