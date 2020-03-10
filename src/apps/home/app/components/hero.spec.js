import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Hero from './hero';

describe('Hero section', () => {
  const node = mount(<Hero />);
  it('should render hero component', () => {
    expect(node.find('HeroLayout').length).toEqual(1);
    expect(node.find('Typography').length).toEqual(9);
    expect(
      node
        .find('Typography')
        .at(0)
        .text()
    ).toEqual('Fabric - Meetup');

    expect(node.find('a').length).toEqual(3);
  });

  it('should match snapshot', () => {
    const component = renderer.create(<Hero />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
