import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from './RootStackParamList';

type UserScreenProp = {
    route: RouteProp<RootStackParamList, 'User'>;
};