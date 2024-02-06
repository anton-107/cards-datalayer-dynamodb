import {Card} from 'cards-model/dist/interfaces/models';
import { Entity } from 'dynamodb-toolbox';

export class CardsRepositoryDynamo {
  constructor(private cardEntity: Entity) {}
  public async putCard(card: Card): Promise<void> {
    await this.cardEntity.put(card);
  }
}