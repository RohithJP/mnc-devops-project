pipeline {
  agent any

  stages {
    stage('Build Docker Image') {
      steps {
        sh '''
          cd backend
          /usr/local/bin/docker build -t mnc-node-app .
        '''
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}
