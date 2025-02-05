import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../styles/global";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import LogoutButton from "../components/LogoutButton";
import PostsScreen from "../screens/PostsScreen";
import ArrowBack from "../../icons/ArrowBack";
import MainCirclePlus from "../../icons/MainCirclePlus";
import PostsIcon from "../../icons/PostsIcon";
import UserIcon from "../../icons/UserIcon";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ navigation }) => ({
        tabBarLabel: "label",
        tabBarStyle: {
          display: 'flex',
          height: 83,
          paddingVertical: 16,
          justifyContent: 'space-between',
          paddingHorizontal: 31,
        },
        tabBarItemStyle: {
          marginHorizontal: 15.5,
          marginTop: 9,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публікації",
          headerRight: () => (
            <LogoutButton
              style={{ paddingRight: 10 }}
              onPress={() => navigation.navigate('Login')}
            />
          ),
          tabBarIcon: ({ focused }) => (
           <PostsIcon width={24} height={24} />
          ),
        })}
      />
    
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <MainCirclePlus width={70} height={40} />
          ),
          headerLeft: () => (
            <ArrowBack
            width={24}
            height={24}
            style={{ marginLeft: 16 }}
            onPress={() => navigation.goBack()}
          />
          )
        })}
      />
        
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "Profile",
          headerRightContainerStyle: { paddingRight: 8 },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <UserIcon width={24} height={24} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabNavigator;