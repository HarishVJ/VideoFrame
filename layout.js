function start() {

    let peerConnections = 9
    for (let index = 0; index < 10; index++) {
        updateLayout(index, peerConnections);

    }

}

function updateLayout(index, peerConnections) {


    var vidElement = document.createElement('video');
    // vidElement.setAttribute('autoplay', '');
    // vidElement.setAttribute('muted', '');
    // vidElement.srcObject = event.streams[0];
    var vidContainer = document.createElement('div');
    vidContainer.setAttribute('id', 'remoteVideo_' + index);
    vidContainer.setAttribute('class', 'videoContainer');
    vidContainer.appendChild(vidElement);
    vidContainer.appendChild(makeLabel("user" + index));
    vidContainer.addEventListener("click", function () {
        deleteFrame(index)
    });

    document.getElementById('videos').appendChild(vidContainer);

    //   document.getElementById('localVideoContainer').appendChild(makeLabel(localDisplayName));
    // update CSS grid based on number of diplayed videos
    var rowHeight = '98vh';
    var colWidth = '98vw';

    // var numVideos = Object.keys(peerConnections).length + 1; // add one to include local video
    var numVideos = peerConnections; // add one to include local video

    if (numVideos > 1 && numVideos <= 4) { // 2x2 grid
        rowHeight = '48vh';
        colWidth = '48vw';
    } else if (numVideos > 4) { // 3x3 grid
        rowHeight = '32vh';
        colWidth = '32vw';
    }

    document.documentElement.style.setProperty(`--rowHeight`, rowHeight);
    document.documentElement.style.setProperty(`--colWidth`, colWidth);
}

function makeLabel(label) {
    var vidLabel = document.createElement('div');
    vidLabel.appendChild(document.createTextNode(label));
    vidLabel.setAttribute('class', 'videoLabel');
    return vidLabel;
}

function deleteFrame(index) {
    
    // debugger;
    $('#remoteVideo_' + index).remove();
    // updateLayout()

}



