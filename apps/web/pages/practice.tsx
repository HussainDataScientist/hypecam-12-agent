/* GENERATED_BY: Antigravity FrontendLayoutAgent */
import React, { useState, useEffect } from 'react';
import { PracticeSessionLayout } from '../../../packages/ui/src/components/PracticeSessionLayout/PracticeSessionLayout';
import { CameraStage } from '../../../packages/ui/src/components/CameraStage/CameraStage';
import { ControlDock } from '../../../packages/ui/src/components/ControlDock/ControlDock';
import { CaptionPill } from '../../../packages/ui/src/components/CaptionPill/CaptionPill';

export default function PracticePage() {
    const [isLive, setIsLive] = useState(false);
    const [caption, setCaption] = useState("Waiting for speech...");

    useEffect(() => {
        if (!isLive) return;
        const evtSource = new EventSource('/api/stubs/captions');
        evtSource.onmessage = (e) => {
            const data = JSON.parse(e.data);
            setCaption(data.text);
        };
        return () => evtSource.close();
    }, [isLive]);

    return (
        <PracticeSessionLayout
            sidebar={<div className="text-gray-400">Chat Panel Placeholder</div>}
            controls={
                <ControlDock
                    isMicOn={isLive}
                    isCamOn={isLive}
                    onToggleMic={() => setIsLive(!isLive)}
                    onToggleCam={() => { }}
                    onEndSession={() => setIsLive(false)}
                />
            }
        >
            <div className="relative w-full max-w-4xl">
                <CameraStage isLive={isLive} />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <CaptionPill text={caption} />
                </div>
            </div>
        </PracticeSessionLayout>
    );
}
