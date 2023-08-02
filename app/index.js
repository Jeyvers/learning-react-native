import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { SAV, SV2 } from "./app.style";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={SAV}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={SV2}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
