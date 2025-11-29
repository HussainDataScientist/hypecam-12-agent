/* GENERATED_BY: Antigravity FrontendLayoutAgent */
import type { Meta, StoryObj } from '@storybook/react';
import { PracticeSessionLayout } from '../src/components/PracticeSessionLayout/PracticeSessionLayout';

const meta: Meta<typeof PracticeSessionLayout> = {
    component: PracticeSessionLayout,
};
export default meta;

type Story = StoryObj<typeof PracticeSessionLayout>;

export const Default: Story = {
    args: {
        children: <div>Main Content</div>,
        sidebar: <div>Sidebar</div>,
        controls: <div>Controls</div>,
    },
};
