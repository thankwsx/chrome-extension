console.log('weiyunzimu')

let videoNode = document.querySelector("video");

console.log(videoNode);

let trackNode = geneSubtitle({
    srclang: "en"
})
videoNode.appendChild(trackNode);

let trackNode2 = geneSubtitle({
    srclang: "zh"
});

videoNode.appendChild(trackNode2);


//<track label="中文字幕"     kind="subtitles"    srclang="de" src="src/sing-song.vtt" default>

function geneSubtitle(options = {
    srclang: "zh"
}) {
    let trackNode = document.createElement("track");

    trackNode.setAttribute("label", "中文字幕");
    trackNode.setAttribute("kind", "subtitles");
    trackNode.setAttribute("srclang", options.srclang);
    trackNode.setAttribute("default", "default");
    console.log(trackNode);
    
    let str = `WEBVTT
    
    00:38.780 --> 00:42.850
    <b>蒂姆·罗宾斯</b>
    
    00:44.750 --> 00:48.820
    <b>摩根·弗里曼</b>
    
    00:51.090 --> 00:55.460
    <b>肖申克的救赎</b>
    
    00:55.960 --> 00:57.460
    <b></b>
    
    02:05.610 --> 02:07.270
    <b>杜弗瑞恩先生</b><b>
    Mr. Dufresne, describe...</b>
    
    02:07.770 --> 02:12.110
    <b>请描述一下你妻子遇害当晚你们吵架时的情况</b><b>
    the confrontation you had with your wife the night she was murdered.</b>`
    
    let subtitleData = "data:text/vtt;base64," + BASE64.encode(str)
    
    console.log(subtitleData);
    
    trackNode.setAttribute("src", subtitleData);
    return trackNode;
}