import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it("Deve renderizar a inserção de dois comentários;", () => {
        const {debug} = render(<PostComment/>);
        fireEvent.change(screen.getByTestId('test-textarea'), {
            target: {
                value: 'Comentário 1'
            }
        })
        fireEvent.click(screen.getByTestId('test-button'))

        fireEvent.change(screen.getByTestId('test-textarea'), {
            target: {
                value: 'Comentário 2'
            }
        })
        fireEvent.click(screen.getByTestId('test-button'))

        debug()
        expect(screen.getAllByTestId('test-comment')).toHaveLength(2);
    })
});