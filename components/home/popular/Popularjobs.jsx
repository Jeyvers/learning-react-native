import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./popularjobs.style";
import { COLORS, icons, images, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { FlatList } from "react-native-gesture-handler";

const PopularJobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            horizontal
            keyExtractor={(item) => item?.job_id}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
