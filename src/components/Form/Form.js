import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validateName, validateAge } from "../Validation";
import { useDisplayContext } from "../../context/DisplayContext";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});
  const { setSubmissions } = useDisplayContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const validationErrors = {
      name: validateName(name),
      age: validateAge(age),
    };

    setErrors(validationErrors);

    if (
      form.checkValidity() &&
      !validationErrors.name &&
      !validationErrors.age
    ) {
      setSubmissions((prev) => [...prev, { name, age: Number(age) }]);
      setName("");
      setAge("");
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={!!errors.name}
          required
          placeholder="Enter name"
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          step="1"
          value={age}
          onChange={(e) => {
            const value = e.target.value;
            if (value.indexOf(".") === -1) {
              setAge(value);
            }
          }}
          isInvalid={!!errors.age}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.age}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" className="submit-btn">
        🚀 Submit Profile
      </Button>
    </Form>
  );
};

export default FormComponent;
