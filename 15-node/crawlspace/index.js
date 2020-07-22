const Crawler = require('crawler');

// Predicate function to decide if we want to a URL to the queue.
const isCrawlable = (url) => {
  if (!url) return false;
  if (!url.startsWith('http')) return false;

  // Add additional annoying URLs as you find them:
  const terribleSites = ['archive.md', 'twitter.com', 'microsoft.com', 'facebook.com', 'medium.com'];
  return !terribleSites.some( awfulSite => url.includes(awfulSite) ); // Heavy magic.

  // const awfulSiteDetected = terribleSites.some((awfulSite) => {
  //   if (url.includes(awfulSite)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // return !awfulSiteDetected; // De Morgan's Laws
};

const c = new Crawler({
  rateLimit: 1000,
  callback: function (err, res, done) {
    if (typeof res.$ === 'function') {
      const title = res.$('title').text();
      console.log( title ); // Show the <title> in the console.
      console.log( res.request.uri.href  ); // Show the URL in the console.
      console.log(); // Create some space.

      const $links = res.$('a');
      $links.each(function () {
        const href = res.$(this).attr('href');

        if (isCrawlable(href)) {
          c.queue( href );
        }

      });
    }

    done();
  }
});

c.queue( process.argv[2] || 'https://lobste.rs/' );
