/* GENERATED_BY: Antigravity FrontendCoreAgent */
import { render, screen } from '@testing-library/react';
import { CameraStage } from '../packages/ui/src/components/CameraStage/CameraStage';

test('renders camera preview', () => {
    render(<CameraStage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
});
