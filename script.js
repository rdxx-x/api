function iniciarMap() {
	// 32.534422791354565, -117.1238239321967
	// 14.535297365406322, -92.22472832164634
	// 21.13877773100859, -86.74072247764035
	xy = document.getElementById('xy')
	x = Math.random() * 32.534422791354565
	if (x < 14.535297365406322) {
		res = (14.535297365406322 - x) + (Math.random() * (32.534422791354565 - 14.535297365406322))
		x += res
	}
	y = Math.random() * -117.1238239321967
	if (y > -86.74072247764035) {
		res = (-86.74072247764035 - y) - (Math.random() * (117.1238239321967 - 86.74072247764035))
		y += res
	}
	xy.innerHTML = x + ', ' + y
	var coord = { lat: x, lng: y };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: coord
	});
	var marker = new google.maps.Marker({
		position: coord,
		map: map
	});
}