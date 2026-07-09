import "../../global.css"
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import images  from "@/constants/images";
import { HOME_USER,HOME_BALANCE,UPCOMING_SUBSCRIPTIONS, HOME_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import ListHeading from "@/components/LIstHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubsriptionCard";
import { FlatList } from "react-native";
import SubscriptionCard from "@/components/subscriptioncard";
import { useState } from "react";
import { ScrollView } from "react-native";
const UpcomingSubscriptionCardAny = UpcomingSubscriptionCard as any;
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
        data={HOME_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() => {
              setExpandedSubscriptionId((currentId) =>
                currentId === item.id ? null : item.id
              );
            }}
          />
        )}
        extraData={expandedSubscriptionId}
        contentContainerStyle={{ gap: 12 }}
        showsVerticalScrollIndicator={true}
        ListEmptyComponent={
          <Text className="home-empty-state">No subscriptions found</Text>
        }
        ListHeaderComponent={() => (
          <>
            <View className="home-header">
              <View className="home-user">
                <Image source={images.avatar} className="home-avatar" />
                <Text className="home-user-name">{HOME_USER.name}</Text>
              </View>

              <Image source={icons.add} className="home-add-button" />
            </View>

            <View className="home-balance-card">
              <Text className="home-balance-label">Balance</Text>
              <View className="home-balance-row">
                <Text className="home-balance-amount">
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>

                <Text className="home-balance-date">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD/YYYY")}
                </Text>
              </View>
            </View>

            <View>
              <ListHeading title="Upcoming" />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => (
                  <UpcomingSubscriptionCardAny {...item} />
                )}
                contentContainerStyle={{ gap: 12 }}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <Text className="home-empty-state">
                    No upcoming subscriptions
                  </Text>
                }
              />
            </View>

            <ListHeading title="All Subscriptions" />
          </>
        )}
      />
    </SafeAreaView>
  );
}