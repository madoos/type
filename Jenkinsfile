#!groovy

node {

    def GITHUB_USER = "madoos"
    def GITHUB_REPO = "type"
    def GITHUB_BRANCH = env.BRANCH_NAME
    def GITHUB_TOKEN =  env.MADOOS_TOKEN

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


    }

}






