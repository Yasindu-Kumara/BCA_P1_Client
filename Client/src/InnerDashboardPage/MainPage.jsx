import React, { useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Linechart from "../Component/Linechart";
import TopCard from "../Component/TopCard";
import BottomCard from "../Component/BottomCard";
import ProfileCard from "../Component/ProfileCard";
import axios from "axios";

export default function MainPage() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://bca-p1.onrender.com/Dashboard");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {Data.map((card) => {
        return (
          <Grid container spacing={5}>
            <Grid item xs={9}>
              <Stack direction={"row"} spacing={2} mb={2}>
                <TopCard
                  id={card._id}
                  title="Total Income"
                  value={card.totalIncome}
                />
                <TopCard title="Total Expense" value={card.totalExpense} />
                <TopCard title="Total credit" value={card.totalCredit} />
                <TopCard title="Total Bonus" value={card.totalBonus} />
              </Stack>
              <Stack spacing={1}>
                <Linechart />
              </Stack>
              <Stack direction={"row"} spacing={2} m={2}>
                <BottomCard
                  title="TOTAL PRODUCT"
                  value={card.totalProduct}
                  img="Images/Chart1.png"
                />
                <BottomCard
                  title="TOTAL EARNING"
                  value={card.totalEarning}
                  img="Images/Chart2.png"
                />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <ProfileCard />
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
