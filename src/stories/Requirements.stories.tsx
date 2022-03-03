import React from "react";
import { storiesOf } from "@storybook/react";
import { FormBuilder } from "@src/index";
import { Payload, ValidationType } from "../form-builder/FormBuilder";
import Input from "@src/components/input/Input";
import Select from "@src/components/select/Select";
import DatePicker from "@src/components/date-picker/DatePicker";
import { Config } from "@src/form-builder";

const config: Config = {
  inputsOptions: {
    input: Input,
    select: Select,
    datePicker: DatePicker,
  },
};
const Component = FormBuilder(config);

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const formConfig = {
    title: "Person",
    formContent: {
      email: "james@gmail.com",
      zodiac_sign: "lion",
      date: "2020-09-13",
    },
    config: [
      {
        name: "email",
        label: "Email",
        config: {
          inputType: "input",
          style: {
            cols: 12,
          },
          validation: {
            required: true,
            type: ValidationType.EMAIL,
          },
        },
      },
      {
        name: "zodiac_sign",
        label: "Zodiac Sign",
        config: {
          inputType: "select",
          style: {
            cols: 12,
          },
          props: {
            options: [
              { label: "Capricornio", value: "capri" },
              { label: "Leao", value: "lion" },
            ],
          },
          validation: {
            required: true,
          },
        },
      },
      {
        name: "date",
        label: "Birth Date",
        config: {
          inputType: "datePicker",
          style: {
            cols: 12,
          },
          validation: {
            required: true,
          },
        },
      },
    ],
  };

  const onIsvalid = (p: Payload) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", p);
  };
  const onInvalid = (p: Payload) => {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", p);
  };

  return (
    <div className="page">
      <div className="panel">
        <Component {...formConfig} onValid={onIsvalid} onInvalid={onInvalid} />
      </div>
    </div>
  );
});
