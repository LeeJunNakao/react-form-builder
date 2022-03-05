# React Form Builder

## Configuration

```js 
/* src/components/form-builders.ts */

import { FormBuilder } from 'react-mount-form';

/* If you want use the lib default components */
export FormBuilder();

/* If you want your own custom component */
import Input from "@src/components/input/Input";
import Select from "@src/components/select/Select";
import DatePicker from "@src/components/date-picker/DatePicker";

const config = {
  inputsOptions: {
    input: Input,
    select: Select,
    datePicker: DatePicker,
  },
};

export default FormBuilder(config);
```

## Using

```js
/* src/App.tsx */

import FormBuilder from "@src/components/form-builder.ts";

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

const App = () => {
    const onIsvalid = (p: Payload) => {
    console.log("Data valid", p);
  };
  const onInvalid = (p: Payload) => {
    console.log("Data invalid", p);
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
```
