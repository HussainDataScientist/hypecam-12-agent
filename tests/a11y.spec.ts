/* GENERATED_BY: Antigravity QAAgent */
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import { CameraStage } from '../packages/ui/src/components/CameraStage/CameraStage';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
    it('CameraStage should have no violations', async () => {
        const { container } = render(<CameraStage />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
