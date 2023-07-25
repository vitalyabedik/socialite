import {Dispatch} from 'redux';

import {followACType, setUsersFollowingAC, unFollowACType} from '../../redux/actions/usersAction';

type FollowUnfollowAction = followACType | unFollowACType;

export const followUnfollow = async (userId: number, actionCreator: (userId: number) => FollowUnfollowAction, apiMethod: (userId: number) => Promise<any>, dispatch: Dispatch) => {
    dispatch(setUsersFollowingAC(userId, true));

    const res = await apiMethod(userId);
    if (res.resultCode === 0) {
        dispatch(actionCreator(userId));
    }

    dispatch(setUsersFollowingAC(userId, false));
}