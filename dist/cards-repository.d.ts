import { Card } from "cards-model/dist/interfaces/models";
import { Entity } from "dynamodb-toolbox";
export declare class CardsRepositoryDynamo {
  private cardEntity;
  constructor(cardEntity: Entity);
  putCard(card: Card): Promise<void>;
  listAllInSpace(spaceID: string): Promise<Card[]>;
  listCardChildren(spaceID: string, cardID: string): Promise<Card[]>;
}
