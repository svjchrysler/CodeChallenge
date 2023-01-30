import React from 'react';
import COLORS from "../src/styles/COLORS";
import {API_URL, ROUTES} from '../src/helpers/Constants';

describe('Colors', () => {
  it('validate Blue Color', () => {
    expect(COLORS.BLUE).toBe('#334FFA');
  });
});

describe('API URL', () => {
  it('validate API URL', () => {
    expect(API_URL).toBe('https://6222994f666291106a29f999.mockapi.io/api/v1/');
  });
});

describe('Navigation Home', () => {
  it('validate Navigation Home', () => {
    expect(ROUTES.HOME).toBe('Home');
  });
});

describe('Navigation Product Detail', () => {
  it('validate Navigation Product Detail', () => {
    expect(ROUTES.PRODUCT_DETAIL).toBe('ProductDetail');
  });
});