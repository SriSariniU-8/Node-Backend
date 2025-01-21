pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Pull the code from GitHub
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies (including Jest)
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests (Jest should be installed locally)
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                bat 'docker build -t node_project:latest .'
            }
        }
    }
}
