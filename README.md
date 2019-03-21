# 이 소스는?

Node.js로 간단한 Video Streaming 을 만들었습니다.

# 스트리밍?

Streaming 이란 데이터를 연속적으로 보내어서 해당 데이터가 완전히 전부다 도착하지 않아도 이용할 수 있게끔 하는 것을 뜻합니다.

네트워크 상에서 데이터 패킷을 보낼 때에는 여러가지 방법을 통해서 보냅니다.
Streaming을 하기 위해서는, 데이터를 연속적으로 보내야 하고 이는 전송계층의 프로토콜과 관련이 됩니다.

따라서 스트리밍 서비스를 제공하기 위해서는 이를위한 전송프로토콜을 이용해야합니다.
이와 관련된 프로토콜로는 RTMP, RTSP, RTP, RTCP, HLS 등이 있습니다.

이 프로젝트는 HLS 프로토콜을 이용해서 구축되었습니다.

# HLS?

HLS에 자세한 정보는 [이곳](https://idlecomputer.tistory.com/93)에 있습니다.

간략하게 요약하자면. HTTP 프로토콜로 미디어 데이터를 조금씩 연속해서 보내고.
그 데이터를 재생하는 방식이라는 것 같습니다.

# 어떻게?

기본개념.[MP4 to HLS](https://www.keycdn.com/support/how-to-convert-mp4-to-hls)

백엔드에서는 이렇게.[hls-server](https://www.npmjs.com/package/hls-server)

클라이언트에서는 이렇게.[hls.js](https://github.com/video-dev/hls.js/blob/master/docs/API.md)

컨버트는 이렇게. [node-fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg/tree/1.x)