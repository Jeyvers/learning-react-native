import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import styles from "./popularjobs.style";
import { COLORS, icons, images, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import useFetch from "../../../hook/useFetch";

const PopularJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    numPages: 1,
  });

  const [selectedJob, setSelectedJob] = useState("");
  const handleCardPress = (item) => {
    router.push(`job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

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
            data={data}
            keyExtractor={(item) => item?.job_id}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                handleCardPress={handleCardPress}
                selectedJob={selectedJob}
              />
            )}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
