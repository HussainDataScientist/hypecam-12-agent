/* GENERATED_BY: Antigravity FrontendCoreAgent */
import React from 'react';

interface CameraStageProps {
    isLive?: boolean;
}

export const CameraStage: React.FC<CameraStageProps> = ({ isLive = false }) => {
    return (
        <div
            role="main"
            aria-label="Camera Stage"
            className="relative w-full aspect-video bg-black rounded-lg overflow-hidden"
        >
            {isLive ? (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                    LIVE
                </div>
            ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                    Camera Preview
                </div>
            )}
        </div>
    );
};
