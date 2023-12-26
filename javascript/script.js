$(document).ready(function() {
    $(".album-poster").on('click', function(e){
        var dataSwitchId = $(this).attr('data-switch');
        ap.list.switch(dataSwitchId);
        ap.play();
        $("#aplayer").addClass('showPlayer');
    });

    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        listFolded: true,
        audio: [
            {
                name: 'Rewrite the stars',
                artist: 'Artist Name',
                url: 'source/Rock.mp3',
                cover: 'pictures/A.jpg'
            },
            {
                name: 'Ideal',
                artist: 'Artist Name',
                url: 'source/Ideal.mp3',
                cover: 'pictures/logo.png'
            },
          
            {
                name: 'OPPMV',
                artist: 'Stephadem',
                url: 'source/OPPM.mp3',
                cover: 'https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            },
            {
				name: 'Rap di',
				artist: 'Artist Name',
				url: 'source/Rap.mp3',
				cover: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			},
			{
				name: 'DRILL ',
				artist: 'Artist Name',
				url: 'source/ffee.mp3',
				cover: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			},
			{
				name: 'Our God ',
				artist: 'YMP',
				url: 'source/Our God.mp3',
				cover: 'pictures/our.png',
			},
            {
				name: 'Unity',
				artist: 'Alan Walker (cover by YMP)',
				url: 'source/Unity.mp3',
				cover: 'pictures/unity.png',
			},
            {
				name: 'Wey',
				artist: 'YMP',
				url: 'source/wey.mp3',
				cover: 'pictures/wey.png',
			},
            {
				name: 'Oceans',
				artist: 'YMP',
				url: 'source/oceans.mp3',
				cover: 'pictures/oceans.jpeg',
			},
        ]
    });
});


$(document).ready(function() {
    $(".album-posters").on('click', function(e){
        var dataSwitchId = $(this).attr('data-switches');
        ap.list.switch(dataSwitchId);
        ap.play();
        $("#aplayer").addClass('showPlayer');
    });

    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        listFolded: true,
        audio: [
            {
				name: 'Oceans',
				artist: 'YMP',
				url: 'source/oceans.mp3',
				cover: 'pictures/oceans.jpeg',
			},
            {
				name: 'Gospel',
				artist: 'YMP',
				url: 'source/piano.mp3',
				cover: 'https://images.pexels.com/photos/838702/pexels-photo-838702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			},
        ]
    });
});

