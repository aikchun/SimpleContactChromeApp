chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 400,
      'height': 500
    },
      'minWidth': 400,
      'minHeight': 500,
      'maxWidth': 400,
      'maxHeight': 500
  });
});


