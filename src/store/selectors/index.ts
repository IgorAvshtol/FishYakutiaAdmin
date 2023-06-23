import { AppRootState } from '@store/store';

export const getCurrentUser = (state: AppRootState) => state.root.currentUser;
export const getActiveTab = (state: AppRootState) => state.root.activeTab;
export const getLoginError = (state: AppRootState) => state.root.error;
export const getOrdersSelector = (state: AppRootState) => state.orders.orders;
