import React from 'react';
import render from '../../_utils/tests/render';
import Tag from '../Tag';
import Tags from '../Tags';
import 'jest-styled-components';

it('renders correctly', () => {
  const { container } = render(<Tag>Tag</Tag>);
  expect(container.firstChild).toMatchSnapshot();
});

describe('colors', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(color => {
    it(`renders correctly for a tag with color ${color}`, () => {
      const { container } = render(<Tag palette={color} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('sizes', () => {
  ['medium', 'large'].forEach(size => {
    it(`renders correctly for a tag with size ${size}`, () => {
      const { container } = render(<Tag size={size} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

it('renders correctly for a list of tags', () => {
  const { container } = render(
    <Tags>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag>Tag 3</Tag>
    </Tags>
  );
  expect(container.firstChild).toMatchSnapshot();
});
