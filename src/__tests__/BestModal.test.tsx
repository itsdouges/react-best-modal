import * as React from 'react';
import BestModal from '../';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as sinon from 'sinon';

const noop = () => {};

describe('<BestModal />', () => {
  it('should pass through all extra props', () => {
    const appRoot = document.createElement('div');
    const extraProps = {
      'aria-labelledby': 'my-h1',
      'aria-describedby': 'my-p',
      className: 'my-modal',
    };

    const wrapper = shallow(
      <BestModal appRoot={appRoot} onRequestClose={noop} {...extraProps}>
        hi
      </BestModal>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should request to close when escape has been pressed', () => {
    const appRoot = document.createElement('div');
    const callback = sinon.spy();
    const addEventListener = sinon.stub(document, 'addEventListener');
    const wrapper = shallow(
      <BestModal appRoot={appRoot} onRequestClose={callback}>
        hi
      </BestModal>
    );
    const trigger = addEventListener.firstCall.args[1];
    const e = {
      keyCode: 27,
    };

    trigger(e);

    addEventListener.restore();
    expect(callback.calledWith(e)).toBe(true);
  });

  it('should do nothing when other keys are pressed', () => {
    const appRoot = document.createElement('div');
    const callback = sinon.spy();
    const addEventListener = sinon.stub(document, 'addEventListener');
    const wrapper = shallow(
      <BestModal appRoot={appRoot} onRequestClose={callback}>
        hi
      </BestModal>
    );
    const trigger = addEventListener.firstCall.args[1];
    const e = {
      keyCode: 10,
    };

    trigger(e);

    addEventListener.restore();
    expect(callback.called).toBe(false);
  });

  it('should listen to keydown on mount', () => {
    const appRoot = document.createElement('div');
    const callback = sinon.spy();
    const addEventListener = sinon.stub(document, 'addEventListener');

    const wrapper = shallow(
      <BestModal appRoot={appRoot} onRequestClose={callback}>
        hi
      </BestModal>
    );

    addEventListener.restore();
    expect(addEventListener.firstCall.args[0]).toEqual('keydown');
  });

  it('should unlisten to keydown when unmounting', () => {
    const appRoot = document.createElement('div');
    const callback = sinon.spy();
    const addEventListener = sinon.stub(document, 'addEventListener');
    const removeEventListener = sinon.stub(document, 'removeEventListener');
    const wrapper = shallow(
      <BestModal appRoot={appRoot} onRequestClose={callback}>
        hi
      </BestModal>
    );

    wrapper.unmount();

    addEventListener.restore();
    removeEventListener.restore();
    expect(removeEventListener.firstCall.args[0]).toEqual('keydown');
    expect(removeEventListener.firstCall.args[1]).toEqual(addEventListener.firstCall.args[1]);
  });

  it('should set aria-hidden to appRoot when mounting', () => {
    const appRoot = document.createElement('div');

    const wrapper = shallow(
      <BestModal appRoot={appRoot} onRequestClose={noop}>
        hi
      </BestModal>
    );

    expect(appRoot.getAttribute('aria-hidden')).toBe('true');
  });

  it('should remove aria-hidden from appRoot when unmounting', () => {
    const appRoot = document.createElement('div');
    const wrapper = shallow(
      <BestModal appRoot={appRoot} onRequestClose={noop}>
        hi
      </BestModal>
    );

    wrapper.unmount();

    expect(appRoot.hasAttribute('aria-hidden')).toBe(false);
  });

  it('should restore focus to previous element when unmounting', () => {
    const previousElement = document.createElement('button');
    previousElement.focus();
    const appRoot = document.createElement('div');
    const wrapper = mount(
      <BestModal appRoot={appRoot} onRequestClose={noop}>
        <button>close</button>
        <input />
      </BestModal>
    );

    wrapper.unmount();

    expect(document.activeElement).toBe(previousElement);
  });

  it('should focus on first focusable element when mounting', done => {
    const appRoot = document.createElement('div');
    const wrapper = mount(
      <BestModal appRoot={appRoot} onRequestClose={noop}>
        <button data-its-me>close</button>
        <input />
      </BestModal>
    );

    setImmediate(() => {
      expect(document.activeElement.hasAttribute('data-its-me')).toBe(true);
      done();
    });
  });
});
