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
                // Clear npm cache before installing
                sh 'npm cache clean --force'

                // Install npm dependencies with verbose logging
                sh 'npm install --verbose'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                sh 'docker build -t node_project:latest .'
            }
        }

    }
}
