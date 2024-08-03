
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        let player;
        let isPlaying = false;
        const playButton = document.querySelector('.controls button:nth-child(2)');
        const progressBar = document.getElementById('progress-bar');

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '0',
                width: '0',
                videoId: 'YVJzNLqfzZg',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        function onPlayerReady(event) {
            event.target.setVolume(100);
        }

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING) {
                playButton.innerHTML = "&#9208;"; // Pause symbol
                isPlaying = true;
            } else {
                playButton.innerHTML = "&#9654;"; // Play symbol
                isPlaying = false;
            }
        }

        function prevTrack() {
            console.log("Previous track");
        }

        function togglePlay() {
            if (isPlaying) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        }

        function nextTrack() {
            console.log("Next track");
        }

        function updateProgressBar() {
            if (player && player.getCurrentTime && player.getDuration) {
                const currentTime = player.getCurrentTime();
                const duration = player.getDuration();
                const progress = (currentTime / duration) * 100;
                progressBar.firstElementChild.style.width = `${progress}%`;
            }
        }

        setInterval(updateProgressBar, 1000);
