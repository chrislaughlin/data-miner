var React = require('react');
var $ = require('jquery');
$('body').append('<div id="content"></div>');
React.render(
<h1>Hello, world!</h1>,
    document.getElementById('content')
);
