/* GENERATED_BY: Antigravity FrontendCoreAgent */
import type { Meta, StoryObj } from '@storybook/react';
import { CaptionPill } from '../src/components/CaptionPill/CaptionPill';

const meta: Meta<typeof CaptionPill> = {
    component: CaptionPill,
};
export default meta;

type Story = StoryObj<typeof CaptionPill>;

export const Default: Story = { args: { text: "Hello world" } };
export const LowConfidence: Story = { args: { text: "Mumble...", confidence: 0.4 } };
