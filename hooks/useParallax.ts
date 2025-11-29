/* GENERATED_BY: Antigravity MotionAgent */
import { useScroll, useTransform } from 'framer-motion';

export function useParallax(value: any, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
