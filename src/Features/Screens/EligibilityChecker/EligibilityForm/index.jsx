import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import validate from "validate.js";
import { makeStyles } from "@material-ui/styles";
import {
  CardContent,
  TextField,
  Button,
  Link,
  Checkbox,
  FormHelperText,
  Typography,
  withStyles,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Slider,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { eligibilityCheck } from "app/actions/card";
import {
  HeaderOneFormTxt,
  HeaderthreeFormTxt,
  Title,
  HeaderTwoFormTxt,
  StyledDiv,
} from "./Styled";
import { useDispatch } from "react-redux";
const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const IOSSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0",
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);
const schema = {
  firstname: {
    presence: { allowEmpty: false, message: "is required" },
  },
  lastname: {
    presence: { allowEmpty: false, message: "is required" },
  },
  policy: {
    presence: { allowEmpty: false, message: "is required" },
  },
  employmentStatus: {
    presence: { allowEmpty: false, message: "is required" },
  },
  FirstLineOfYourAddress: {
    presence: { allowEmpty: false, message: "is required" },
  },
  postcode: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const useStyles = makeStyles(() => ({
  root: {},
  policy: {
    display: "flex",
    alignItems: "center",
  },
  policyCheckbox: {
    marginLeft: "-14px",
  },
}));

const titles = ["Mr", "Mrs", "Miss", "Ms", "Dr"];
const status = ["Full time", "Part time", "Student"];

function EligibilityForm({ className, ...rest }) {
  const classes = useStyles();
  const [userTitle, setUserTitle] = useState("Mr");
  const dispatch = useDispatch();
  const history = useHistory();
  const [income, setIncome] = React.useState(10000);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const [selectedDate, handleDateChange] = useState(
    new Date().setFullYear(new Date().getFullYear() - 18)
  );
  const handleChangeIncome = (event, newValue) => {
    setIncome(newValue);
  };
  const handleChange = (event) => {
    event.persist();

    setFormState((prevFormState) => ({
      ...prevFormState,
      values: {
        ...prevFormState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...prevFormState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    !!(formState.touched[field] && formState.errors[field]);
  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((prevFormState) => ({
      ...prevFormState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleFormSubmit =  (e) => {
    e.preventDefault();
    const user = {
      title: userTitle,
      name: `${formState.values.firstname} ${formState.values.lastname}`,
      dob: selectedDate,
      income: income,
      firstLineAddress: formState.values.FirstLineOfYourAddress,
      postcode: formState.values.postcode,
      status: formState.values.employmentStatus,
    };
   dispatch(eligibilityCheck(user))
    history.push("/results")

   
  };

  return (
    <StyledDiv {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <form autoComplete="off" onSubmit={(e) => handleFormSubmit(e)}>
          <HeaderOneFormTxt>Eligability checker</HeaderOneFormTxt>
          <HeaderTwoFormTxt>About you</HeaderTwoFormTxt>
          <HeaderthreeFormTxt>
            We use this information to identify you when calculating your score.
          </HeaderthreeFormTxt>
          <HeaderTwoFormTxt>Title</HeaderTwoFormTxt>
          <div
            style={{
              display: "flex",
              border: "1px solid grey",
              overflow: "scroll",
            }}
          >
            {titles.map((title, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setUserTitle(title)}
                  style={{
                    border:
                      userTitle === title
                        ? "2px solid black"
                        : "1px solid grey",
                    backgroundColor: userTitle === title ? "#e8e3ff" : "white",
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 20,
                    cursor: "pointer",
                    minWidth: 150,
                  }}
                >
                  <Title>{title}</Title>
                </div>
              );
            })}
          </div>
          <HeaderTwoFormTxt>First name</HeaderTwoFormTxt>

          <TextField
            error={hasError("firstname")}
            fullWidth
            helperText={
              hasError("firstname") ? formState.errors.firstname[0] : null
            }
            label="firstname"
            margin="normal"
            name="firstname"
            onChange={handleChange}
            value={formState.values.firstname || ""}
            variant="outlined"
          />

          <HeaderTwoFormTxt>Last name</HeaderTwoFormTxt>
          <TextField
            error={hasError("lastname")}
            fullWidth
            helperText={
              hasError("lastname") ? formState.errors.lastname[0] : null
            }
            label="lastname"
            margin="normal"
            name="lastname"
            onChange={handleChange}
            type="lastname"
            value={formState.values.lastname || ""}
            variant="outlined"
          />
          <HeaderTwoFormTxt>First line of your address</HeaderTwoFormTxt>
          <TextField
            error={hasError("FirstLineOfYourAddress")}
            fullWidth
            helperText={
              hasError("FirstLineOfYourAddress")
                ? formState.errors.FirstLineOfYourAddress[0]
                : null
            }
            label="First line of your address"
            margin="normal"
            name="FirstLineOfYourAddress"
            onChange={handleChange}
            type="First line of your address"
            value={formState.values.FirstLineOfYourAddress || ""}
            variant="outlined"
          />
          <HeaderTwoFormTxt>Postcode</HeaderTwoFormTxt>
          <TextField
            error={hasError("postcode")}
            fullWidth
            helperText={
              hasError("postcode") ? formState.errors.postcode[0] : null
            }
            label="postcode"
            margin="normal"
            name="postcode"
            onChange={handleChange}
            type="postcode"
            value={formState.values.postcode || ""}
            variant="outlined"
          />
          <div className={classes.policy}>
            <HeaderTwoFormTxt>Date of Birth</HeaderTwoFormTxt>
          </div>

          <KeyboardDatePicker
            style={{ marginTop: 20 }}
            disableFuture
            maxDate={new Date().setFullYear(new Date().getFullYear() - 18)}
            autoOk
            fullWidth
            variant="inline"
            inputVariant="outlined"
            label="DOB"
            format="dd/MM/yyyy"
            value={selectedDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={(date) => handleDateChange(date)}
          />

          <HeaderTwoFormTxt>Income</HeaderTwoFormTxt>
          <IOSSlider
            onChange={handleChangeIncome}
            max={100000}
            value={income}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
          />
          <HeaderTwoFormTxt>Employment status</HeaderTwoFormTxt>
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel>Employment status</InputLabel>
            <Select
              fullWidth
              name="employmentStatus"
              error={hasError("employmentStatus")}
         
              onChange={handleChange}
              value={formState.values.employmentStatus || ""}
              label="Employment status"
            >
              {status.map((stat, i) => {
                return (
                  <MenuItem key={i} value={stat}>
                    {stat}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <div className={classes.policy}>
            <Checkbox
              checked={formState.values.policy || false}
              className={classes.policyCheckbox}
              color="primary"
              name="policy"
              onChange={handleChange}
            />
            <Typography color="textSecondary" variant="body1">
              I have read the{" "}
              <Link
                color="secondary"
                component={RouterLink}
                to="#"
                underline="always"
                variant="h6"
              >
                Terms and Conditions
              </Link>
            </Typography>
          </div>
          {hasError("policy") && (
            <FormHelperText error>{formState.errors.policy[0]}</FormHelperText>
          )}
          <Button
            className={classes.submitButton}
            color="secondary"
            disabled={!formState.isValid}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            <h2>Click to Sign Up</h2>
          </Button>
        </form>
      </CardContent>
    </StyledDiv>
  );
}

export default EligibilityForm;
