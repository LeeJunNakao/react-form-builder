import { useRef } from "react";
import Input from "components/input/Input";
import Select from "components/select/Select";
import "./style.scss";

function App() {
  return (
    <div className="page">
      <div className="panel">
        <Input placeholder="Name" />
        <Select
          options={[
            { label: "nome", value: "NAME" },
            { label: "idade", value: "AGE" },
            { label: "carro", value: "CAR" },
            { label: "rua", value: "STREET" },
            { label: "carro", value: "CAR" },
            { label: "rua", value: "STREET" },
            { label: "carro", value: "CAR" },
            { label: "rua", value: "STREET" },
            { label: "carro", value: "CAR" },
            { label: "rua", value: "STREET" },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
