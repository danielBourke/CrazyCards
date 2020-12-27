import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { getCards } from "app/actions/card";
import CardList from "Features/Components/CardList";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.accounts);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      if (mounted) {
        try {
          dispatch(getCards());
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <CardList txt="List of available cards" cards={cards} />
    </>
  );
};

export default HomeScreen;
