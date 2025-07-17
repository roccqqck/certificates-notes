var https = require('https'); // Use the native https module
var fs = require('fs'); // fs is not used in your provided snippet, but keeping it if needed elsewhere

var postData = JSON.stringify({
  "name": "roccqqck",
  "accountNumber": 101
});

var options = {
  'method': 'POST',
  'hostname': 'eoz2r89z0wqz8pv.m.pipedream.net',
  'port': 8443, // Keep the specified port
  'path': '/api/getname', // Keep the specified path
  'headers': {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData), // Crucial for POST requests with native http/s
    'api_keys': 'fasdfasdfsdf',
    'gtoken': 'gtjkjbsdf'
  },
  'rejectUnauthorized': false // This is a native https module option, keeping it as requested
};

// Log the request method, path, and headers (similar to curl -v's request header section)
console.log(`> ${options.method} ${options.path} HTTP/1.1`);
console.log(`> Host: ${options.hostname}:${options.port}`); // Include port for clarity
for (const key in options.headers) {
  console.log(`> ${key}: ${options.headers[key]}`);
}
console.log('>'); // Empty line after request headers

var req = https.request(options, function (res) {
  var chunks = [];

  // Log the response status and headers (similar to curl -v's response header section)
  console.log(`< HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  for (const key in res.headers) {
    console.log(`< ${key}: ${res.headers[key]}`);
  }
  console.log('<'); // Empty line after response headers

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log('\n--- Response Body ---'); // Separator for body
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error('Response error:', error);
  });
});

req.on("error", function (error) {
  console.error('Request error:', error);
});

req.write(postData); // Write the POST body
req.end(); // End the request, sending headers and body