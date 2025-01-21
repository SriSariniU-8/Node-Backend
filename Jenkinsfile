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
                // Install Node.js dependencies
                bat 'npm install'
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
