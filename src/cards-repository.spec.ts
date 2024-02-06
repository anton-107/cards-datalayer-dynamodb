import { ChildProcess } from 'child_process';
import DynamoDbLocal from 'dynamodb-local';
import { CardsRepositoryDynamo } from './cards-repository';
import { CardEntity } from './dynamodb-toolbox/entity';
import { CardsRepository } from 'cards-model/dist/queries';

describe('Cards repository', () => {
  const dynamoLocalPort = 8000;
  let dynamoLocalProcess: ChildProcess;

  beforeAll(async () => {
    dynamoLocalProcess = await DynamoDbLocal.launch(dynamoLocalPort, null, [], false, true);
    console.log('dynamoLocalProcess launched');
  }, 10_000);

  afterAll(async () => {
    console.log('stopping dynamoLocalProcess');
    await DynamoDbLocal.stopChild(dynamoLocalProcess);
    console.log('dynamoLocalProcess stopped');
  });

  it('should save a new card', async () => {
    console.log('running a test');
    const repository = new CardsRepository();
    const persistedRepository = new CardsRepositoryDynamo(CardEntity);
    await persistedRepository.putCard(repository.addCard({
      spaceID: 'space-1',
      name: 'Card 1',
      parentCardPathToRoot: null,
    }));
  });
});