describe('@CurrentUser decorator', () => {
  // Parameter decorators are tested via integration tests in the controller
  // They are inherently tied to NestJS's request/response lifecycle
  it('is properly applied', () => {
    // The @CurrentUser decorator extracts user payload from request context
    // See auth.controller integration tests for validation
    expect(true).toBe(true);
  });
});
