import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import HeroLayout from './layout';

describe('Layout', () => {
  const node = mount(
    <HeroLayout backgroundClassName="something">
      <div className="child-component">blah child</div>
    </HeroLayout>
  );
  it('should render layout component', () => {
    expect(node.find('section').length).toEqual(1);
    expect(node.find('img').length).toEqual(1);
    expect(node.find('.child-component').length).toEqual(1);
  });

  it('should match snapshot', () => {
    const component = renderer.create(
      <HeroLayout backgroundClassName="something">
        <div>blah child</div>
      </HeroLayout>
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
