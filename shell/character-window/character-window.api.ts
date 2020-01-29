import { POE_URL_STASH_ITEMS } from "../constants";
import { StashTabResponse } from "./models";
import { HttpService, DataStore } from "../utils";

export class CharacterWindowApi {
  private readonly httpService: HttpService = new HttpService();
  private readonly store = new DataStore();

  public async getStashTabs(
    poesessid: string,
    accountName: string,
    realm: string,
    league: string
  ): Promise<StashTabResponse> {
    let tabs = await this.store.read<StashTabResponse>("getStashTabs");

    if (!tabs) {
      const url = new URL(POE_URL_STASH_ITEMS);
      url.searchParams.append("accountName", accountName);
      url.searchParams.append("realm", realm);
      url.searchParams.append("league", league);
      url.searchParams.append("tabs", "1");

      tabs = await this.httpService.get(url, poesessid);
      if (tabs) {
        this.store.write("getStashTabs", tabs)
      }
    }

    return tabs as any;
  }

  public async getStashItems(
    poesessid: string,
    accountName: string,
    realm: string,
    league: string,
    tabs: number,
    indices: number[]
  ): Promise<any> {
    const requests = indices.map(async index => {
      const key = `${accountName}${league}${index}`;
      let storedTab = await this.store.read<StashTabResponse>(key);

      if (!storedTab) {
        const url = new URL(POE_URL_STASH_ITEMS);
        url.searchParams.append("accountName", accountName);
        url.searchParams.append("realm", realm);
        url.searchParams.append("league", league);
        url.searchParams.append("tabs", tabs.toString());
        url.searchParams.append("tabIndex", index.toString());
        url.searchParams.append("public", "false");

        storedTab = await this.httpService.get(url, poesessid);

        await this.store.write(key, storedTab!);
      }

      return !!storedTab ? storedTab.items : [];
    });

    const stashTabsItems = await Promise.all(requests);
    return stashTabsItems.flat();
  }
} 6645646456456777
