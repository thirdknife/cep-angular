import * as fromAuthentication from './authentication.reducer';
import { selectAuthenticationState } from './authentication.selectors';

describe('Authentication Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAuthenticationState({
      [fromAuthentication.authenticationFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
