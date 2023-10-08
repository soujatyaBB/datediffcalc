# Use an official nginx runtime as a base image
FROM nginx:alpine

# Copy the local index.html file to the container
COPY index.html /usr/share/nginx/html
COPY script.js /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html

# Expose port 80 to allow external access
EXPOSE 80