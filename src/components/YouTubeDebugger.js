import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }
  
  handleBitrate = () => {
    this.setState({
      settings.bitrate: 12
    })
  }
  
  handleBitrate = () => {
    this.setState({
      settings.video.resolution: '720p'
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBitrate}>bitrate</button>
        <button onClick={this.handleResolution}>resolution</button>
      </div>
      
    );
  }
}