/* GENERATED_BY: Antigravity BuilderMode */
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
    const buttonBase = "p-4 rounded-full transition-all duration-300 ease-out hover:scale-110 active:scale-95 shadow-lg backdrop-blur-md border border-white/10";
    const activeClass = "bg-white/10 text-white hover:bg-white/20";
    const inactiveClass = "bg-red-500 text-white hover:bg-red-400 shadow-red-500/20";

    return (
        <div
            role="toolbar"
            aria-label="Session Controls"
            className="flex gap-6 p-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/5 shadow-2xl"
        >
            <button
                onClick={onToggleMic}
                aria-pressed={isMicOn}
                className={`${buttonBase} ${isMicOn ? activeClass : inactiveClass}`}
            >
                {isMicOn ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" /></svg>
                )}
            </button>
            <button
                onClick={onToggleCam}
                aria-pressed={isCamOn}
                className={`${buttonBase} ${isCamOn ? activeClass : inactiveClass}`}
            >
                {isCamOn ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" /></svg>
                )}
            </button>
            <button
                onClick={onEndSession}
                className="ml-4 px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold tracking-wide transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-500/50 hover:scale-105 active:scale-95"
            >
                End Session
            </button>
        </div>
    );
};
