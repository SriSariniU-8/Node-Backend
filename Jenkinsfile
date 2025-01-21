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
                // Install Node.js dependencies using npm on Windows
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests using npm on Windows
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image using Windows-compatible command
                bat 'docker build -t node_project:latest .'
            }
        }
    }
}
