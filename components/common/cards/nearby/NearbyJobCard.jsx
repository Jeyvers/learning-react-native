import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { checkImageUrl } from "../../../../utils";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(job)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageUrl(job?.employer_logo)
              ? job?.employer_logo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLDjAFNNLARILsglmPL3gP6XcUuY9C8b5dl9S5Yivuw&s",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
