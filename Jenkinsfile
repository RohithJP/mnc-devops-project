node {
    stage('Checkout') {
        checkout scm
    }

    stage('Build Docker Image') {
        dir('backend') {
            sh 'docker build -t mnc-node-app .'
        }
    }

    stage('Deploy to Kubernetes') {
        sh 'kubectl apply -f k8s/'
    }
}
