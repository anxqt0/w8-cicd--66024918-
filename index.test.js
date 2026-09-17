const test = require('node:test');
const assert = require('node:assert/strict');
const { createMessage } = require('./index');

test('returns a greeting for the supplied name', () => {
  assert.equal(
    createMessage('Nina'),
    'Hello, Nina! The CI/CD pipeline is working.'
  );
});

test('uses a default name when no name is supplied', () => {
  assert.equal(
    createMessage(),
    'Hello, Cloud Student! The CI/CD pipeline is working.'
  );
});

test('supports a Thai name', () => {
  assert.equal(
    createMessage('นีน่า'),
    'Hello, นีน่า! The CI/CD pipeline is working.'
  );
});

test('handles an explicitly supplied empty name consistently', () => {
  assert.equal(
    createMessage(''),
    'Hello, ! The CI/CD pipeline is working.'
  );
});
