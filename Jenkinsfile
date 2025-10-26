pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build Backend') {
      steps {
        sh 'cd backend && mvn -B package -DskipTests'
      }
    }
    stage('Build Frontend') {
      steps {
        sh 'cd frontend && npm ci && npm run build'
      }
    }
    stage('Docker Build') {
      steps {
        sh 'docker compose build'
      }
    }
    stage('Deploy to AWS') {
      steps {
        sshagent(['aws-ssh-key']) {
          sh '''
          ssh -o StrictHostKeyChecking=no ubuntu@<AWS_PUBLIC_IP> "
            cd /home/ubuntu/online-art-gallery &&
            git pull origin main &&
            docker compose down &&
            docker compose up -d --build
          "
          '''
        }
      }
    }
  }
}
