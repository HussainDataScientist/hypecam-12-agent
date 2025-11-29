/* GENERATED_BY: Antigravity FrontendLayoutAgent */
import { render, screen } from '@testing-library/react';
import { PracticeSessionLayout } from '../packages/ui/src/components/PracticeSessionLayout/PracticeSessionLayout';

test('renders layout regions', () => {
    render(
        <PracticeSessionLayout
            sidebar={<div>Sidebar</div>}
            controls={<div>Controls</div>}
        >
            <div>Content</div>
        </PracticeSessionLayout>
    );
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Controls')).toBeInTheDocument();
});
