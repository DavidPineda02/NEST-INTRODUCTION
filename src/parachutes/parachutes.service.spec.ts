import { Test, TestingModule } from '@nestjs/testing';
import { ParachutesService } from './parachutes.service';

describe('ParachutesService', () => {
  let service: ParachutesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParachutesService],
    }).compile();

    service = module.get<ParachutesService>(ParachutesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
