import {NameSpace} from '../root-reducer';

export const getCurrencies = (state: any) => state[NameSpace.CURRENCIES].orders;
export const getIsCurrencyLoaded = (state: any) => state[NameSpace.CURRENCIES].isCurrencyLoaded;
export const getActiveTabName = (state: any) => state[NameSpace.CURRENCIES].activeTabName;
