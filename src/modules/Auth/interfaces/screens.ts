import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export interface screen {
  navigation: NativeStackNavigationProp<any, any>;
  children?: any;
}

export interface login extends screen {
  // email: React.MutableRefObject<any>;
  // password: React.MutableRefObject<any>;
}

