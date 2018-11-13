var docWidth = parent.document.documentElement.clientWidth
var docHeight = parent.document.documentElement.clientHeight
var docScale = docHeight / docWidth
var designWidth = 1920
var scale = docWidth / designWidth
console.log(docScale)
scale = scale.toFixed(1)
var oMeta = document.getElementsByTagName('meta')[1]
oMeta.setAttribute('content', `width=device-width, user-scalable=no, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`)
