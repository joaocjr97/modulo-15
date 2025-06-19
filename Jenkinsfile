pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Jenkins fará o checkout automaticamente
            }
        }
        stage('Install dependencies (web-tests)') {
            steps {
                dir('web-tests') {
                    sh 'npm install'
                }
            }
        }
        stage('Run tests (web-tests)') {
            steps {
                dir('web-tests') {
                    sh 'npx cypress run'
                }
            }
        }
        stage('Install dependencies (api-tests)') {
            steps {
                dir('api-tests') {
                    sh 'npm install'
                }
            }
        }
        stage('Run tests (api-tests)') {
            steps {
                dir('api-tests') {
                    sh 'npx cypress run'
                }
            }
        }
    }
}
