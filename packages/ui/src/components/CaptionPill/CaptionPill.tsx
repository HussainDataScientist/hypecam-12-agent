/* GENERATED_BY: Antigravity FrontendCoreAgent */
import React from 'react';

interface CaptionPillProps {
    text: string;
    confidence?: number;
}

export const CaptionPill: React.FC<CaptionPillProps> = ({ text, confidence = 1.0 }) => {
    return (
        <div
            role="log"
            aria-live="polite"
            className={`bg-black/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-opacity ${confidence < 0.5 ? 'opacity-50' : 'opacity-100'}`}
        >
            {text}
        </div>
    );
};
