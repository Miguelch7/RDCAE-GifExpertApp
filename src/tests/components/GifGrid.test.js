import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Piece';

    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h3').text() ).toBe( category );
    });

    test('debe de mostrar items cuando se cargan imagenes', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa'
        },{
            id: 'DEF',
            url: 'https://localhost/cualquier/otra_cosa.jpg',
            title: 'otra cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
    
});
