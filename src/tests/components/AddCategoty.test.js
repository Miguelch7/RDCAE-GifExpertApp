import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
 
    // test('debe de cambiar el input', () => {
    //     const input = wrapper.find('input');
    //     const value = 'Hola Mundo';

    //     input.simulate( 'change', { target: { value } } );

    //     expect( wrapper.find('p').text().trim() ).toBe( value );
    // });

    test('no debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar el input', () => {
        const value = 'Hola Mundo';

        // 1. Simular el inputChange
        const input = wrapper.find('input');
        input.simulate( 'change', { target: { value } } );

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        // 4. El valor del input debe de estar vacio
        expect( input.prop('value') ).toBe('');
    });
    

})
