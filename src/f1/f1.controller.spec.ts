import { Test, TestingModule } from '@nestjs/testing';
import { F1Controller } from './f1.controller';

describe('F1Controller', () => {
  let controller: F1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [F1Controller],
    }).compile();

    controller = module.get<F1Controller>(F1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
