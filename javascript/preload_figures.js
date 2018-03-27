var images = [];
function loadExplodedImages() {
    for (var i = 0; i < 21; i++) {
        images[i] = new Image();
		var imsrc = './images/miCube_exploded_animation/smallSize/exploded_${i}.png';
		images[i].src = imsrc;
    }
}
//