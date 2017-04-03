#!groovy

node {

    def GITHUB_USER = "madoos"
    def GITHUB_REPO = "type"
    def GITHUB_BRANCH = env.BRANCH_NAME
    def GITHUB_TOKEN =  env.GITHUB_TOKEN
    def NPM_TOKEN = env.NPM_TOKEN

    stage("checkout SCM"){
      checkout scm
    }

    stage("Make Tests"){
      sh "./bin/CI/testBuilder ${GITHUB_USER} ${GITHUB_REPO} ${GITHUB_BRANCH} ${GITHUB_TOKEN}"
    }

    stage("publish Reports"){
      publishHTML([
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: false, reportDir: "./report/coverage/lcov-report",
        reportFiles: "index.html",
        reportName: "Coverage Report"
      ])
      publishHTML([
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: false, reportDir: "./report/linter/",
        reportFiles: "index.html",
        reportName: "Linter Report"
      ])
    }

    if ( env.BRANCH_NAME ==~ /.*develop.*/ ){


    }else if( env.BRANCH_NAME ==~ /.*master.*/ ){


    }else if( env.BRANCH_NAME ==~ /.*PR.*/ ){


    }else if( env.BRANCH_NAME ==~ /.*release.*/ ){

      def PACKAGE_VERSION = sh (script: "./bin/CI/get-release ${GITHUB_BRANCH}", returnStdout: true)

      stage("Publish package"){
        sh "./bin/CI/npmPublisher ${GITHUB_USER} ${GITHUB_REPO} ${GITHUB_BRANCH} ${GITHUB_TOKEN} ${NPM_TOKEN} ${PACKAGE_VERSION}"
      }

    }

}