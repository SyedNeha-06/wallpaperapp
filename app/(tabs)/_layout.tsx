import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'For You',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="explore/index"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
            <Tabs.Screen
                name="account/index"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}
