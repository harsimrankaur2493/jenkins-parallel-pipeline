pipeline {
    agent any

    stages {
        stage('Parallel Build') {
            parallel {
                stage('Build Feature-Login Branch') {
                    agent any
                    steps {
                        echo '🚀 Building Feature-Login Branch...'
                        // Checkout the feature-login branch
                        checkout([
                            $class: 'GitSCM',
                            branches: [[name: '*/feature-login']],
                            userRemoteConfigs: [[url: 'https://github.com/harsimrankaur2493/jenkins-parallel-pipeline.git']]
                        ])
                        // Simulate build
                        sh '''
                            echo "🔧 Installing dependencies for feature-login..."
                            echo "Building code from feature-login branch..."
                            node login.js || echo "Simulated build complete for login feature"
                            sleep 5
                        '''
                    }
                }

                stage('Build Feature-Payment Branch') {
                    agent any
                    steps {
                        echo '💳 Building Feature-Payment Branch...'
                        // Checkout the feature-payment branch
                        checkout([
                            $class: 'GitSCM',
                            branches: [[name: '*/feature-payment']],
                            userRemoteConfigs: [[url: 'https://github.com/harsimrankaur2493/jenkins-parallel-pipeline.git']]
                        ])
                        // Simulate build
                        sh '''
                            echo "🔧 Installing dependencies for feature-payment..."
                            echo "Building code from feature-payment branch..."
                            node payment.js || echo "Simulated build complete for payment feature"
                            sleep 5
                        '''
                    }
                }
            }
        }
    }
}
