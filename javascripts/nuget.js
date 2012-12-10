var nuget = (function(){
  function render(target, packages){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < packages.length; i++) {
      fragment += '<li>'
      fragment += '<a class="nuget-link" href="'+packages[i].url+'">'+packages[i].name+'</a>'
      fragment += '<p class="nuget-dl">'+packages[i].downloadCount+'</p>'
      fragment += '<p class="nuget-desc">'+packages[i].description+'</p>'
      fragment += '</li>';
    }
    t.innerHTML = fragment;
  }

  function salt(){
    var now = new Date();
    var saltDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    return saltDate.getTime();
  }

  return {
    showPackages: function(options){
      var feed = new google.feeds.Feed("http://nuget.org/api/v2/Search?searchTerm='Author="+escape(options.author)+"'&targetFramework='%20'&includePrerelease=false&" + salt());
      feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
      feed.load(function(result) {
          var xDoc = result.xmlDocument;
          var xml = $(xDoc);
          var entries = xml.find("entry");
          var packages = [];

          for(var i=0, length=entries.length; i<length; i++) {
            var pkg = $(entries[i]);
            var title = pkg.find("title").text();
            var isDuplicate = !packages.every(function(x){ x.name !== title; });
            if (!isDuplicate) {
              var properties = pkg.find("properties");
              var url = properties.find("GalleryDetailsUrl").text();
              url = url.substring(0, url.lastIndexOf("/")+1);
              var package = {
                url : url,
                name : title,
                description : properties.find("Description").text(),
                downloadCount : parseInt(properties.find("DownloadCount").text())
              };
              packages.push(package);
            }
          }

          packages.sort(function(x,y) {
            if (x.downloadCount > y.downloadCount) return -1;
            if (x.downloadCount < y.downloadCount) return 1;
            return 0;
          });

          if (options.count) { packages.splice(options.count); }
          render(options.target, packages);
      });
    }
  };
})();
