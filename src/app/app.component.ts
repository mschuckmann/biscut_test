import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
//import VideoJSPlayer from '@types/videojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private _elementRef: ElementRef;
  private videoJSplayer1 : VideoJSPlayer;
  private videoJSplayer2 : VideoJSPlayer;

  //@ViewChild('video1') videoJSplayer1: VideoJSPlayer;
  //@ViewChild('video2') videoJSplayer2: VideoJSPlayer;

  constructor(elementRef: ElementRef) {
    this._elementRef = elementRef
  }

  ngOnInit() {
    console.log('Init - Component initialized')

    this.videoJSplayer1 = videojs(document.getElementById('example_video_1'), {}, function() {
        // This is functionally the same as the previous example.
    });

    this.videoJSplayer2 = videojs(document.getElementById('example_video_2'), {}, function() {
        // This is functionally the same as the previous example.
    });

  }

  ngOnDestroy() {
    console.log('Deinit - Destroyed Component')
    this.videoJSplayer1.dispose()
    this.videoJSplayer2.dispose()
  }

  clicked() {
    this.videoJSplayer1.play();
    this.videoJSplayer2.play();
  }
}
