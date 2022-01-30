import { useRef } from "react";
import Input from "components/input/Input";
import Select from "components/select/Select";
import { FormBuilderProps } from "form-builder";
import FormBuilder from "components/form-builder/FormBuilder";
import "./style.scss";

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
          options: [{ label: "Carro", value: "car" }],
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
