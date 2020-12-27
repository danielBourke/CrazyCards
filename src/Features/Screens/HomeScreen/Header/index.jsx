import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import creditcardshero from "app/assets/creditcards-hero.png";
import HeroButton from "../../../Components/HeroButton";
import {
  HeaderInfoSection,
  HeaderOneTxt,
  HeaderItemWrapper,
  HeaderWrapper,
  ButtonSection,
} from "./Styled";

const Header = () => {
  const history = useHistory();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <HeaderWrapper>
        <HeaderItemWrapper>
          <HeaderInfoSection>
            <HeaderOneTxt>Find the right credit card for you</HeaderOneTxt>
            <h2>
              Join three million people getting the inside track on their credit
              report.
            </h2>
            <ButtonSection>
              <HeroButton
                txt="Check My Eligibility"
                func={() => history.push("/EligibilityChecker")}
              />

              <h6>No harm to your credit rating Free forever</h6>
            </ButtonSection>
          </HeaderInfoSection>
        </HeaderItemWrapper>
        <HeaderItemWrapper>
          <img
            src={creditcardshero}
            style={{ maxHeight: isMd ? 550 : 350, margin: "auto" }}
            alt=""
          />
        </HeaderItemWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
