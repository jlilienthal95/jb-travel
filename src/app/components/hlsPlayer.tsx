import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function HLSPlayer({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            // Check if the browser can natively play HLS (Safari)
            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = src; // Use native support for Safari
            } else if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(src);  // Load the HLS stream
                hls.attachMedia(video);  // Attach the stream to the video element
            } else {
                console.error("HLS is not supported on this browser");
            }
        }

        // Cleanup HLS instance when the component unmounts
        return () => {
            if (video && Hls.isSupported()) {
                const hls = new Hls();
                hls.destroy();
            }
        };
    }, [src]);

    return <video ref={videoRef} autoPlay muted loop playsInline />
}