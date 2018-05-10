

var docWidth = parent.document.documentElement.clientWidth;
var docHeight = parent.document.documentElement.clientHeight;
var docScale = docHeight / docWidth,
    designWidth = 1920,
    scale = docWidth / designWidth;
    scale = scale.toFixed(1)
var oMeta = document.getElementsByTagName('meta')[1]
    oMeta.setAttribute('content',`width=device-width, user-scalable=no, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`)