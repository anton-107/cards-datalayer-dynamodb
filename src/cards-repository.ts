import { Card } from "cards-model/dist/interfaces/models";
import { Entity } from "dynamodb-toolbox";

export class CardsRepositoryDynamo {
  constructor(private cardEntity: Entity) {}
  public async putCard(card: Card): Promise<void> {
    await this.cardEntity.put(card);
  }
  public async listAllInSpace(spaceID: string): Promise<Card[]> {
    const queryResults = await this.cardEntity.query(spaceID);
    return queryResults.Items as Card[];
  }
  public async listCardChildren(
    spaceID: string,
    cardID: string,
  ): Promise<Card[]> {
    const queryResults = await this.cardEntity.query(spaceID, {
      beginsWith: `CARD${cardID}_L`,
    });
    return queryResults.Items as Card[];
  }
}
