
import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../../../src/webui/components/Footer/index';

describe('<Footer /> component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Footer />);
    });

    it('should load the inital state of Footer component', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
