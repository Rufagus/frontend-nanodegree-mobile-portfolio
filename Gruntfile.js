
module.exports = function(grunt) {

  // Grunt config
  grunt.initConfig({


//cssmin config
cssmin: {
   dist: {
      files: {
         'css/style.min.css': ['css/style.css'],
         'css/print.min.css': ['css/print.css']
      }
  }
},


//pagespeed config
 pagespeed: {
  options: {
    nokey: true,
    url: "http://37e8364b.ngrok.io/"
  },
  // prod: {
  //   options: {
  //     url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
  //     locale: "en_GB",
  //     strategy: "desktop",
  //     threshold: 80
  //   }
  // },
  paths: {
    options: {
      // paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
      locale: "en_GB",
      strategy: "desktop",
      threshold: 90
    }
  }
}
  });

//load pagespeed plugin
grunt.loadNpmTasks('grunt-pagespeed');

//Load cssmin plugin
grunt.loadNpmTasks('grunt-contrib-cssmin');

//Load imagemin plugin
grunt.loadNpmTasks('grunt-contrib-imagemin');

}