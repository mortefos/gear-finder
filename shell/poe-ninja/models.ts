export interface PoeNinjaSparkLine {
  data: number[];
  totalChange: number;
}

export interface PoeNinjaValueDetails {
  count: number;
  data_point_count: number;
  get_currency_id: number;
  id: number;
  includes_secondary: boolean;
  league_id: number;
  pay_currency_id: number;
  sample_time_utc: string;
  value: number;
}

export interface PoeNinjaItemValue {
  chaosEquivalent: number;
  currencyTypeName: string;
  detailsId: string;
  lowConfidencePaySparkLine: PoeNinjaSparkLine;
  lowConfidenceReceiveSparkLine: PoeNinjaSparkLine;
  pay: PoeNinjaValueDetails;
  paySparkLine: PoeNinjaSparkLine;
  receive: PoeNinjaValueDetails;
  receiveSparkLine: PoeNinjaSparkLine;
}

export interface PoeNinjaResponse {
  lines: PoeNinjaItemValue[];
  currencyDetails: any[];
  language: any;
}

export enum CurrencyOverviewType {
  Currency = "Currency",
  Fragment = "Fragment"
}

export enum ItemOverviewType {
  BaseType = "BaseType",
  Beast = "Beast",
  DivinationCard = "DivinationCard",
  Essence = "Essence",
  Fossil = "Fossil",
  HelmetEnchant = "HelmetEnchant",
  Incubator = "Incubator",
  Oil = "Oil",
  Prophecy = "Prophecy",
  Resonator = "Resonator",
  Map = "Map",
  Scarab = "Scarab",
  SkillGem = "SkillGem",
  UniqueAccessory = "UniqueAccessory",
  UniqueArmour = "UniqueArmour",
  UniqueFlask = "UniqueFlask",
  UniqueJewel = "UniqueJewel",
  UniqueMap = "UniqueMap",
  UniqueWeapon = "UniqueWeapon",
  Watchstone = "Watchstone"
}
