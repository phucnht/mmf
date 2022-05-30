export type AirdropEvent = {
  id: string;
  name: string;
  itemImage: string;
  events: AirdropItem[];
  description: string;
  condition: string;
  fromDate: string;
  toDate: string;
  isStarted?: boolean;
  isFinished?: boolean;
};

export type AirdropItem = {
  id: string;
  name: string;
  itemImage: string;
  description: string;
  condition: string;
  fromDate: string;
  toDate: string;
  isStarted?: boolean;
  isFinished?: boolean;
  parentId: string;
  nftContract: string;
  nftType: number;
  onchainId: string;
  whitelistContract: string;
};
