import { render, screen } from '@testing-library/react';
import AddPurchase from './AddPurchase';

describe('AddPurchase Component', () => {
    it('renders without crashing', () => {
        render(<AddPurchase />);
        expect(screen.getByRole('button', { variant: 'contained' })).toBeInTheDocument();
    });
});