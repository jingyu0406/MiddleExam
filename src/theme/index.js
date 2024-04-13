import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     light400: '#666666',
     primary700: '#6200EE',
     DayGreen:'#73DBC8',
     DayLightGreen:'#D9EFEB'

   },
 };

 export default MyTheme;