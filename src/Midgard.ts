import { DefaultApi } from './api';
import { Configuration } from './api/configuration';
import { midgardApiUrl } from './config';
import {
  NetworkType,
  Health,
  PoolDetail,
  PoolStatsDetail,
  PoolLegacyDetail,
  PoolStatus,
  StatsPeriod,
  HistoryQuery,
  DepthHistory,
  EarningsHistory,
  SwapHistory,
  LiquidityHistory,
  Node,
  Network,
  ActionsList,
  ActionListParams,
  MemberDetails,
  StatsData,
  Constants,
  InboundAddresses,
  Lastblock,
  Queue,
} from './types';

class Midgard {
  private baseUrl: string;
  private apiConfig: Configuration;
  private midgardAPI: DefaultApi;

  public readonly version = 'V2';

  constructor(network: NetworkType = 'chaosnet') {
    this.baseUrl =
      network === 'chaosnet' ? midgardApiUrl.chaosnet : midgardApiUrl.testnet;

    this.apiConfig = new Configuration({ basePath: this.baseUrl });
    this.midgardAPI = new DefaultApi(this.apiConfig);
  }

  getBaseUrl = (): string => {
    return this.baseUrl;
  };

  async getHealth(): Promise<Health> {
    try {
      const { data } = await this.midgardAPI.getHealth();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPools(status?: PoolStatus): Promise<PoolDetail[]> {
    try {
      const { data } = await this.midgardAPI.getPools(status);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPoolDetail(asset: string): Promise<PoolDetail> {
    try {
      const { data } = await this.midgardAPI.getPool(asset);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPoolStats({
    asset,
    period,
  }: {
    asset: string;
    period: StatsPeriod;
  }): Promise<PoolStatsDetail> {
    try {
      const { data } = await this.midgardAPI.getPoolStats(asset, period);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPoolStatsV1(asset: string): Promise<PoolLegacyDetail> {
    try {
      const { data } = await this.midgardAPI.getPoolStatsLegacy(asset);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getDepthHistory({
    pool,
    query = {},
  }: {
    pool: string;
    query?: HistoryQuery;
  }): Promise<DepthHistory> {
    try {
      const { interval, count, from, to } = query;
      const { data } = await this.midgardAPI.getDepthHistory(
        pool,
        interval,
        count,
        to,
        from,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getEarningsHistory(query: HistoryQuery): Promise<EarningsHistory> {
    try {
      const { interval, count, from, to } = query;
      const { data } = await this.midgardAPI.getEarningsHistory(
        interval,
        count,
        to,
        from,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getSwapHistory({
    pool,
    query = {},
  }: {
    pool?: string;
    query?: HistoryQuery;
  }): Promise<SwapHistory> {
    try {
      const { interval, count, from, to } = query;
      const { data } = await this.midgardAPI.getSwapHistory(
        pool,
        interval,
        count,
        to,
        from,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getLiquidityHistory({
    pool,
    query = {},
  }: {
    pool?: string;
    query?: HistoryQuery;
  }): Promise<LiquidityHistory> {
    try {
      const { interval, count, from, to } = query;
      const { data } = await this.midgardAPI.getLiquidityHistory(
        pool,
        interval,
        count,
        to,
        from,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getNodes(): Promise<Node[]> {
    try {
      const { data } = await this.midgardAPI.getNodes();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getNetworkData(): Promise<Network> {
    try {
      const { data } = await this.midgardAPI.getNetworkData();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getActions(params: ActionListParams): Promise<ActionsList> {
    try {
      const { limit, offset, address, txId, asset, type } = params;

      const { data } = await this.midgardAPI.getActions(
        limit,
        offset,
        address,
        txId,
        asset,
        type,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getMembersAddresses(): Promise<string[]> {
    try {
      const { data } = await this.midgardAPI.getMembersAdresses();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getMemberDetail(address: string): Promise<MemberDetails> {
    try {
      const { data } = await this.midgardAPI.getMemberDetail(address);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getStats(): Promise<StatsData> {
    try {
      const { data } = await this.midgardAPI.getStats();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProxiedConstants(): Promise<Constants> {
    try {
      const { data } = await this.midgardAPI.getProxiedConstants();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProxiedInboundAddresses(): Promise<InboundAddresses> {
    try {
      const { data } = await this.midgardAPI.getProxiedInboundAddresses();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProxiedLastblock(): Promise<Lastblock> {
    try {
      const { data } = await this.midgardAPI.getProxiedLastblock();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProxiedQueue(): Promise<Queue> {
    try {
      const { data } = await this.midgardAPI.getProxiedQueue();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default Midgard;