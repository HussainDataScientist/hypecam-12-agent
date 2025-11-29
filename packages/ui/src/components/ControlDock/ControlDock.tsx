/* GENERATED_BY: Antigravity FrontendCoreAgent */
import React from 'react';

interface ControlDockProps {
    onToggleMic: () => void;
    onToggleCam: () => void;
    onEndSession: () => void;
    isMicOn: boolean;
    isCamOn: boolean;
}

export const ControlDock: React.FC<ControlDockProps> = ({
    onToggleMic,
    onToggleCam,
    onEndSession,
    isMicOn,
    isCamOn
}) => {
    return (
        <div role="toolbar" aria-label="Session Controls" className="flex gap-4 p-4 bg-surface rounded-full">
            <button
                onClick={onToggleMic}
                aria-pressed={isMicOn}
                className={`p-3 rounded-full ${isMicOn ? 'bg-gray-700' : 'bg-red-500'}`}
            >
                {isMicOn ? 'Mic On' : 'Mic Off'}
            </button>
            <button
                onClick={onToggleCam}
                aria-pressed={isCamOn}
                className={`p-3 rounded-full ${isCamOn ? 'bg-gray-700' : 'bg-red-500'}`}
            >
                {isCamOn ? 'Cam On' : 'Cam Off'}
            </button>
            <button
                onClick={onEndSession}
                className="ml-auto bg-red-600 text-white px-6 py-2 rounded-full font-bold"
            >
                End
            </button>
        </div>
    );
};
