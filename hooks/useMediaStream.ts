/* GENERATED_BY: Antigravity BuilderMode */
import { useState, useEffect, useRef } from 'react';

export function useMediaStream(isActive: boolean) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!isActive) {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                setStream(null);
            }
            return;
        }

        async function enableStream() {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { width: 1280, height: 720, facingMode: 'user' },
                    audio: false // Audio handled separately or not needed for preview
                });
                setStream(mediaStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            } catch (err) {
                setError(err as Error);
                console.error("Failed to access camera:", err);
            }
        }

        enableStream();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [isActive]);

    return { videoRef, stream, error };
}
