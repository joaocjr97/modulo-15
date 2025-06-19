pipeline {
    agent any

    stages {
        // WEB TESTS
        stage('Install dependencies (web-tests)') {
            steps {
                dir('web-tests') {
                    sh 'npm install'
                }
            }
        }
        stage('Instala binário Cypress (web-tests)') {
            steps {
                dir('web-tests') {
                    // IMPORTANTE: Garante o download do binário Cypress
                    sh 'npx cypress install'
                }
            }
        }
        stage('Corrigir permissões do Cypress (web-tests)') {
            steps {
                dir('web-tests') {
                    sh 'chmod +x ./node_modules/.bin/cypress || true'
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

        // API TESTS
        stage('Install dependencies (api-tests)') {
            steps {
                dir('api-tests') {
                    sh 'npm install'
                }
            }
        }
        stage('Instala binário Cypress (api-tests)') {
            steps {
                dir('api-tests') {
                    // Mesma explicação: Baixa/instala o binário Cypress nessa pipeline.
                    sh 'npx cypress install'
                }
            }
        }
        stage('Corrigir permissões do Cypress (api-tests)') {
            steps {
                dir('api-tests') {
                    sh 'chmod +x ./node_modules/.bin/cypress || true'
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
