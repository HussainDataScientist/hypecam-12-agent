/* GENERATED_BY: Antigravity SecurityPrivacyAgent */
import React from 'react';

interface ConsentModalProps {
    onAccept: () => void;
}

export const ConsentModal: React.FC<ConsentModalProps> = ({ onAccept }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-lg max-w-md">
                <h2 className="text-xl font-bold mb-4">Privacy Consent</h2>
                <p className="mb-4">We process your audio data to provide feedback. Data is not stored permanently.</p>
                <button
                    onClick={onAccept}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    I Agree
                </button>
            </div>
        </div>
    );
};
