import { FilterPipe } from '../searchPipe/filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
