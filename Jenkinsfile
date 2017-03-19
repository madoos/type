#!groovy

node {

    stage 'checkout test'
    sh 'bin/CI/testBuilder'
    publishHTML([
      allowMissing: false,
      alwaysLinkToLastBuild: false,
      keepAll: false, reportDir: './report/coverage/lcov-report',
      reportFiles: 'index.html',
      reportName: 'Coverage Report'
    ])
    publishHTML([
      allowMissing: false,
      alwaysLinkToLastBuild: false,
      keepAll: false, reportDir: './report/linter/',
      reportFiles: 'index.html',
      reportName: 'Linter Report'
    ])


    if ( env.BRANCH_NAME ==~ /.*develop.*/ ){
 

    }else if( env.BRANCH_NAME ==~ /.*master.*/ ){


    }else if( env.BRANCH_NAME ==~ /.*PR.*/ ){


    }

}
