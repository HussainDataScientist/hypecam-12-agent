/* GENERATED_BY: Antigravity BuilderMode */
import React from 'react';
import { useMediaStream } from '../../../../../hooks/useMediaStream';

interface CameraStageProps {
    isLive?: boolean;
}

export const CameraStage: React.FC<CameraStageProps> = ({ isLive = false }) => {
    const { videoRef, error } = useMediaStream(true); // Always on for preview, or toggle with isLive

    return (
        <div
            role="main"
            aria-label="Camera Stage"
            className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
            {error ? (
                <div className="flex items-center justify-center h-full text-red-500 bg-red-500/10">
                    Camera Error: {error.message}
                </div>
            ) : (
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover transform scale-x-[-1]" // Mirror effect
                />
            )}

            {isLive && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    LIVE
                </div>
            )}
        </div>
    );
};
