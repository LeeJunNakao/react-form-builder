import { FormBuilderProps } from "form-builder";
import FormBuilder from "components/form-builder/FormBuilder";
import "./style.scss";
import { ValidationType } from "form-builder/FormBuilder";

const formConfig: FormBuilderProps = {
  title: "Person",
  config: [
    {
      name: "name",
      label: "Name",
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
  ],
};

function App() {
  return (
    <div className="page">
      <div className="panel">
        <FormBuilder {...formConfig} />
      </div>
    </div>
  );
}

export default App;
