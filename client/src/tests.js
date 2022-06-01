import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Create  from './components/Create/Create';

describe('<Create /> Mounted', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Create />);
  });
  it('El form debe tener un label que diga: "Name:"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('label')[0]
    expect(element.innerHTML).toBe('Name:');
  });

  it('El form debe tener un label que diga: "Weight:"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('label')[1]
    expect(element.innerHTML).toBe('Weight:');
  });

  it('El form debe tener un label que diga: "Height:"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('label')[1]
    expect(element.innerHTML).toBe('Height:');
  });

  it('El form debe tener un label que diga: "Lifespan:"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('label')[1]
    expect(element.innerHTML).toBe('Lifespan:');
  });

  it('El form debe tener un label que diga: "Image:"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('label')[1]
    expect(element.innerHTML).toBe('Image:');
  });

  it('El form debe tener un label que diga: "Temperaments:"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('label')[1]
    expect(element.innerHTML).toBe('Temperaments:');
  });



  it('El form debe tener un input con name "name" y type "text"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('name');
  });

  it('El form debe tener un input con name "minHeight" y type "text"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('minHeight');
  });

  it('El form debe tener un input con name "maxHeight" y type "text"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('maxHeight');
  });

  it('El form debe tener un input con name "minWeight" y type "text"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('minWeight');
  });

  it('El form debe tener un input con name "shortLifespan" y type "text"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('shortLifespan');
  });

  it('El form debe tener un input con name "longLifespan" y type "text"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('longLifespan');
  });

  it('El form debe tener un input con name "Temperaments" y type "text"', () => {
    const { container } = render(<Create />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('Temperaments');
  });
});

