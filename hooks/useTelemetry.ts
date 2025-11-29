/* GENERATED_BY: Antigravity AnalyticsAgent */
import { useEffect } from 'react';

export function useTelemetry(eventName: string, payload?: any) {
    useEffect(() => {
        console.log(`[Telemetry] ${eventName}`, payload);
        // In production, send to collector
    }, [eventName, payload]);
}
