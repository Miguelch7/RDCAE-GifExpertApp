import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow( <GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Piece', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategory={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
});