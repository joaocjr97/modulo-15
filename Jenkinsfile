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
        stage('Corrigir permissões do Cypress (web-tests)') {
            steps {
                dir('web-tests') {
                    // ATENÇÃO: Este passo é essencial para ambientes Linux/Jenkins/Docker, 
                    // pois o binário do Cypress pode não vir com permissão de execução,
                    // resultando no erro "Permission denied" ao rodar os testes!
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
        stage('Corrigir permissões do Cypress (api-tests)') {
            steps {
                dir('api-tests') {
                    // ATENÇÃO: Etapa obrigatória, igual ao web-tests, para evitar 
                    // "Permission denied" ao rodar Cypress.
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
