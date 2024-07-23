import { render, screen, fireEvent  } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../src/App';
import ButtonLong from '../src/components/ButtonLong';
import ButtonShort from '../src/components/ButtonShort';
import { describe, it, expect } from 'vitest';

const mockStore = configureStore([]);

const initialState = {
    user: {
      user: {
        name: '',
        email: '',
        password: '',
      },
    },
  };

const store = mockStore(initialState);

describe('App component', () => {
  it('renders the Login page by default', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
  });

  it('renders the Registration page when navigated to /reg', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/reg']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/registration/i)).toBeInTheDocument();
  });

  it('renders the Landing page when navigated to /landing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/landing']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});




