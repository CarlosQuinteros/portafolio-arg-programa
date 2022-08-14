import { TestBed } from '@angular/core/testing';

import { UsuarioInterceptorInterceptor } from './usuario-interceptor.interceptor';

describe('UsuarioInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UsuarioInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UsuarioInterceptorInterceptor = TestBed.inject(UsuarioInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
