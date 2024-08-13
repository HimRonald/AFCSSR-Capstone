import { useState, useEffect } from "react";

import { db } from "../../config";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function useFetchData() {
  const [loading, setLoading] = useState(true);
  const [totalMembers, setTotalMembers] = useState(0);
  const [totalPublicSectorMembers, setTotalPublicSectorMembers] = useState(0);
  const [totalPrivateSectorMembers, setTotalPrivateSectorMembers] = useState(0);
  const [totalBusinessOwners, setTotalBusinessOwners] = useState(0);
  const [genderDistribution, setGenderDistribution] = useState({
    Male: 0,
    Female: 0,
    Other: 0,
  });
  const [
    educationQualificationDistribution,
    setEducationQualificationDistribution,
  ] = useState({
    undergraduate: 0,
    postgraduate: 0,
    "Ph.D": 0,
    Other: 0,
  });
  const [graduationYears, setGraduationYears] = useState({});
  const [businessTypesDistribution, setBusinessTypesDistribution] = useState(
    {}
  );
  const [attendedUniversities, setAttendedUniversities] = useState({});
  const [jobTitles, setJobTitles] = useState({});
  const [ageDistribution, setAgeDistribution] = useState({
    "18-24": 0,
    "25-34": 0,
    "35-44": 0,
    "45-54": 0,
    "55+": 0,
  });

  const membersCollectionRef = collection(db, "members");

  const fetchData = async (queryConstraints, setState) => {
    try {
      setLoading(true);
      const q = query(membersCollectionRef, ...queryConstraints);
      const snapshot = await getDocs(q);
      setLoading(false);
      setState(snapshot.size);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  const fetchBusinessOwnersCount = async () => {
    try {
      setLoading(true);
      const q = query(membersCollectionRef);
      const snapshot = await getDocs(q);
      let businessOwnersCount = 0;
      snapshot.forEach((doc) => {
        const business = doc.data().business;
        if (business && business.length > 0) {
          businessOwnersCount++;
        }
      });
      setLoading(false);
      setTotalBusinessOwners(businessOwnersCount);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching business owners count:", error);
    }
  };

  const fetchGenderDistribution = async () => {
    try {
      setLoading(true);
      const q = query(membersCollectionRef);
      const snapshot = await getDocs(q);
      const genderCounts = { Male: 0, Female: 0, Other: 0 };
      snapshot.forEach((doc) => {
        const gender = doc.data().gender;
        if (genderCounts[gender] !== undefined) {
          genderCounts[gender]++;
        } else {
          genderCounts.Other++;
        }
      });
      setLoading(false);
      setGenderDistribution(genderCounts);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching gender distribution:", error);
    }
  };

  const fetchEducationQualificationDistribution = async () => {
    try {
      setLoading(true);
      const q = query(membersCollectionRef);
      const snapshot = await getDocs(q);
      const educationQualificationCounts = {
        undergraduate: 0,
        postgraduate: 0,
        "Ph.D": 0,
        Other: 0,
      };
      snapshot.forEach((doc) => {
        const educationQualification = doc.data().qualification;
        if (
          educationQualificationCounts[educationQualification] !== undefined
        ) {
          educationQualificationCounts[educationQualification]++;
        } else {
          educationQualificationCounts.Other++;
        }
      });
      setLoading(false);
      setEducationQualificationDistribution(educationQualificationCounts);
    } catch (error) {
      setLoading(false);
      console.error("Error", error);
    }
  };

  const fetchGraduationYears = async () => {
    try {
      setLoading(true);
      const q = query(membersCollectionRef);
      const snapshot = await getDocs(q);
      const graduationYearCounts = {};
      snapshot.forEach((doc) => {
        const graduationDate = doc.data().graduationDate;
        const graduationYear = new Date(graduationDate).getFullYear();
        if (graduationYearCounts[graduationYear] !== undefined) {
          graduationYearCounts[graduationYear]++;
        } else {
          graduationYearCounts[graduationYear] = 1;
        }
      });
      setLoading(false);
      setGraduationYears(graduationYearCounts);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching graduation year distribution:", error);
    }
  };

  const fetchBusinessTypesDistribution = async () => {
    try {
      setLoading(true);
      const q = query(membersCollectionRef);
      const snapshot = await getDocs(q);
      const businessTypesCounts = {};
      snapshot.forEach((doc) => {
        const businessTypes = doc.data().businessTypes || [];
        businessTypes.forEach((type) => {
          if (businessTypesCounts[type] !== undefined) {
            businessTypesCounts[type]++;
          } else {
            businessTypesCounts[type] = 1;
          }
        });
      });
      setLoading(false);
      setBusinessTypesDistribution(businessTypesCounts);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching business types distribution:", error);
    }
  };

  const fetchAttendedUniversities = async () => {
    try {
      setLoading(true);
      const q = query(membersCollectionRef);
      const snapshot = await getDocs(q);
      const universityCounts = {};
      snapshot.forEach((doc) => {
        const university = doc.data().university;
        if (universityCounts[university] !== undefined) {
          universityCounts[university]++;
        } else {
          universityCounts[university] = 1;
        }
      });
      setLoading(false);
      setAttendedUniversities(universityCounts);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching university distribution:", error);
    }
  };

  const fetchJobTitles = async () => {
    try {
      setLoading(true);
      const q = query(membersCollectionRef);
      const snapshot = await getDocs(q);
      const jobTitleCounts = {};
      snapshot.forEach((doc) => {
        const jobTitle = doc.data().occupation;
        if (jobTitleCounts[jobTitle] !== undefined) {
          jobTitleCounts[jobTitle]++;
        } else {
          jobTitleCounts[jobTitle] = 1;
        }
      });
      setLoading(false);
      setJobTitles(jobTitleCounts);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching job title distribution:", error);
    }
  };

  const fetchAgeDistribution = async () => {
    try {
      setLoading(true);
      const q = query(membersCollectionRef);
      const snapshot = await getDocs(q);
      const ageCounts = {
        "18-24": 0,
        "25-34": 0,
        "35-44": 0,
        "45-54": 0,
        "55+": 0,
      };
      const currentYear = new Date().getFullYear();
      snapshot.forEach((doc) => {
        const dateOfBirth = doc.data().dateOfBirth;
        const birthYear = new Date(dateOfBirth).getFullYear();
        const age = currentYear - birthYear;

        if (age >= 18 && age <= 24) {
          ageCounts["18-24"]++;
        } else if (age >= 25 && age <= 34) {
          ageCounts["25-34"]++;
        } else if (age >= 35 && age <= 44) {
          ageCounts["35-44"]++;
        } else if (age >= 45 && age <= 54) {
          ageCounts["45-54"]++;
        } else if (age >= 55) {
          ageCounts["55+"]++;
        }
      });
      setLoading(false);
      setAgeDistribution(ageCounts);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching age distribution:", error);
    }
  };

  useEffect(() => {
    fetchData([], setTotalMembers);
    fetchData([where("sector", "==", "public")], setTotalPublicSectorMembers);
    fetchData([where("sector", "==", "private")], setTotalPrivateSectorMembers);
    fetchBusinessOwnersCount();
    fetchGenderDistribution();
    fetchEducationQualificationDistribution();
    fetchGraduationYears();
    fetchBusinessTypesDistribution();
    fetchAttendedUniversities();
    fetchJobTitles();
    fetchAgeDistribution();
  }, []);

  return {
    loading,
    totalMembers,
    totalPublicSectorMembers,
    totalPrivateSectorMembers,
    totalBusinessOwners,
    genderDistribution,
    educationQualificationDistribution,
    graduationYears,
    businessTypesDistribution,
    attendedUniversities,
    jobTitles,
    ageDistribution,
  };
}
