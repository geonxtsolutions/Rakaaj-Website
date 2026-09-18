# Use the lightweight Nginx image
FROM nginx:alpine

# Copy all project files into the Nginx server directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80