# CI/CD using Git Actions for Customer Portal

This project demonstrates a continuous integration and continuous deployment (CI/CD) pipeline using GitHub Actions for a customer portal application. The CI/CD pipeline involves containerization of the application, updating Docker images on Docker Hub, and automated deployment to Azure Virtual Machines (VMs) when code changes occur. Technologies used in this project include Docker Hub, GitHub, Git, Azure, GitHub Actions, React, and Express.js.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [CI/CD Pipeline](#ci/cd-pipeline)
- [Installation](#installation)
- [Usage](#usage)
- [About Application](#about-application)


## Overview

The "CI/CD using Git Actions for Customer Portal" project demonstrates the automation of software development processes, including building, testing, and deploying the customer portal application. This automation improves development efficiency and ensures that the application is always up-to-date.

## Technologies Used

- Docker Hub: Used for hosting Docker images.
- GitHub: Used for version control and hosting the project repository.
- Git: Version control system for tracking changes to code.
- Azure: Used for deploying and hosting virtual machines.
- GitHub Actions: Automated workflows for CI/CD.
- React: Front-end JavaScript library for building user interfaces.
- Express.js: Back-end web application framework for Node.js.

## CI/CD Pipeline

The CI/CD pipeline includes the following steps:

1. **Containerization**: The application is containerized using Docker.
2. **GitHub Actions**: CI/CD workflows are defined using GitHub Actions. On code changes, GitHub Actions trigger the CI/CD pipeline.
3. **Building**: The Docker image is built and pushed to Docker Hub.
4. **Azure Deployment**: Azure VMs are automatically updated with the latest Docker image when changes occur in the repository.

## Installation

To set up a local development environment, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/pragzz1238/CI-CD-using-Git-Actions-for-Customer-Portal.git
   ```
   
2. Navigate to the project directory:

   ```bash
   cd CI-CD-using-Git-Actions-for-Customer-Portal

3. Install the required dependencies for both the front-end and back-end:

   ```bash
   # Install front-end dependencies
   cd front_end
   npm install
    
   # Install back-end dependencies
   cd ../back_end
   npm install
   ```
   
## Usage

1. Start the back-end Express.js server:

   ```bash
   cd back_end
   npm start
   ```
   The server should start on http://localhost:8081.

2. Start the React front-end:
   
   ```bash
   cd front_end
   npm start
   ```
   The React development server should start on http://localhost:3000.

3. Open your web browser and navigate to http://localhost:3000 to access the web app.

## About Application

- Make changes to the customer portal application code.

- Push the changes to your GitHub repository.

- GitHub Actions will automatically trigger the CI/CD pipeline, updating the Docker image on Docker Hub and deploying the changes to Azure VMs.
