
	const change = () => {
		let avatars = document.getElementsByClassName("css-1dbjc4n r-1wyvozj r-633pao r-u8s1d r-1v2oles r-desppf")
		Array.from(avatars).forEach( (avi) => {
			if (avi.style.clipPath === 'url("#hex-hw-shapeclip-clipconfig")') {
				avi.style.clipPath = 'circle(25%)' }
			} 
		)
	}

setInterval(change, 1500);
