/* GENERATED_BY: Antigravity FrontendCoreAgent */
import type { Meta, StoryObj } from '@storybook/react';
import { ControlDock } from '../src/components/ControlDock/ControlDock';

const meta: Meta<typeof ControlDock> = {
    component: ControlDock,
};
export default meta;

type Story = StoryObj<typeof ControlDock>;

export const Default: Story = {
    args: {
        isMicOn: false,
        isCamOn: false,
        onToggleMic: () => { },
        onToggleCam: () => { },
        onEndSession: () => { },
    },
};
