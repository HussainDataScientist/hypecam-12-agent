/* GENERATED_BY: Antigravity FrontendCoreAgent */
import type { Meta, StoryObj } from '@storybook/react';
import { CameraStage } from '../src/components/CameraStage/CameraStage';

const meta: Meta<typeof CameraStage> = {
    component: CameraStage,
};
export default meta;

type Story = StoryObj<typeof CameraStage>;

export const Default: Story = {};
export const Live: Story = { args: { isLive: true } };
