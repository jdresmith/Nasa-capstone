import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import { expect, beforeEach, afterEach, test, vi } from 'vitest';

// Mocking the fetch API and localStorage
beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
  
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn(),
    };
  });
  
  afterEach(() => {
    vi.restoreAllMocks();
  });
  
  test('fetches data and renders the Main component', async () => {
    render(<App />);
  
    // Check if the loading state is displayed initially
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
    // Wait for the data to load and render
    await waitFor(() => {
      expect(screen.getByText(mockData.title)).toBeInTheDocument();
    });
  
    // Verify that fetch was called
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://api.nasa.gov/planetary/apod'),
    );
  
    // Verify localStorage caching
    expect(global.localStorage.setItem).toHaveBeenCalledWith(
      expect.stringContaining('NASA-'),
      JSON.stringify(mockData)
    );
  });
  
  test('uses cached data if available', async () => {
    // Mock localStorage to return cached data
    global.localStorage.getItem.mockImplementation(() =>
      JSON.stringify(mockData)
    );
  
    render(<App />);
  
    // Wait for the cached data to render
    await waitFor(() => {
      expect(screen.getByText(mockData.title)).toBeInTheDocument();
    });
  
    // Verify that fetch is not called when cached data is available
    expect(global.fetch).not.toHaveBeenCalled();
  });
  