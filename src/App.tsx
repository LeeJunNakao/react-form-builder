import { FormBuilderProps } from "form-builder";
import FormBuilder from "components/form-builder/FormBuilder";
import "./style.scss";
import { Payload, ValidationType } from "form-builder/FormBuilder";

const formConfig: FormBuilderProps = {
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

function App() {
  const onIsvalid = (p: Payload) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", p);
  };
  const onInvalid = (p: Payload) => {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", p);
  };

  return (
    <div className="page">
      <div className="panel">
        <FormBuilder
          {...formConfig}
          onValid={onIsvalid}
          onInvalid={onInvalid}
        />
      </div>
    </div>
  );
}

export default App;
