export const getUsers = state => state.usersPage;

export const getPageSize = state => state.usersPage.pageSize;

export const getCurrentPage = state => state.usersPage.currentPage;

export const getTotalUsersCount = state => state.usersPage.totalUsersCount;

export const getIsFetching = state => state.usersPage.isFetching;

export const getDisabled = state => state.usersPage.disabled;
