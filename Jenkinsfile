pipeline {
    agent any

    stages {
        stage('Parallel Build') {
            parallel {
                stage('Build Feature-Login Branch') {
                    agent any
                    steps {
                        echo 'Building Feature-Login Branch...'
                        checkout([$class: 'GitSCM',
                            branches: [[name: '*/feature-login']],
                            userRemoteConfigs: [[url: 'https://github.com/harsimrankaur2493/jenkins-parallel-pipeline.git']]
                        ])
                        sh 'echo "Building code from feature-login branch"'
                        sh 'sleep 10'
                    }
                }

                stage('Build Feature-Payment Branch') {
                    agent any
                    steps {
                        echo 'Building Feature-Payment Branch...'
                        checkout([$class: 'GitSCM',
                            branches: [[name: '*/feature-payment']],
                            userRemoteConfigs: [[url: 'https://github.com/harsimrankaur2493/jenkins-parallel-pipeline.git']]
                        ])
                        sh 'echo "Building code from feature-payment branch"'
                        sh 'sleep 10'
                    }
                }
            }
        }
    }
}
