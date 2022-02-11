import React from "react";

export default function VideoDetail({ video }) {
    if(!video){
        return <div>loading..</div>
    }

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
      <div>
      <div className="ui embed">
      <iframe src={videoSource}></iframe>
      </div>
    <div className="ui segment">
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
    </div>
  );
}
