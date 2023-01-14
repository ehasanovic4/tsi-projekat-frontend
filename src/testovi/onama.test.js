import { render, screen, cleanup } from '@testing-library/react'
import Onama from '../pages/Onama';

test('should render Onama', () => {
    render(<Onama/>);
    const onamaElement = screen.getByTestId('onama-1');
    expect(onamaElement).toBeInTheDocument();
    expect(onamaElement).toHaveTextContent('O nama');
});